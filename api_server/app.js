const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const escodegen = require("escodegen-wallaby");
const esprima = require("esprima");
const estraverse = require("estraverse");
const { JSToCSS } = require("./util");

// TODO: ソースのファイルパス（今後、複数ファイルに書き出す必要があるが、一旦App.jsファイルに決め打ちする）
const sourceFilePath = "../my_front_source/src/App.js";

app.use(cors());
app.use(express.json());

app.put("/save_boxes", (req, res) => {
  console.log(req);
  const boxes = req.body;

  fs.readFile(sourceFilePath, "utf8", async (err, data) => {
    if (err) throw err;
    // ソースコードを書き換える
    const ast = esprima.parseModule(data, { jsx: true });
    // buttonのimport文を追加
    ast.body.unshift({
      type: "ImportDeclaration",
      specifiers: [
        {
          type: "ImportDefaultSpecifier",
          local: {
            type: "Identifier",
            name: "Button"
          }
        }
      ],
      source: {
        type: "Literal",
        value: "@material-ui/core/Button",
        raw: "'@material-ui/core/Button'"
      }
    });

    // buttonを追加する
    estraverse.replace(ast, {
      enter: function(node, parent) {
        if (
          node.type === "ReturnStatement" &&
          node.argument.type === "JSXElement"
        ) {
          Object.keys(boxes).forEach((key, index) => {
            const { left, top, jsx } = boxes[key];
            console.log("box jsx element");
            console.log(jsx.props);

            console.log("button node");
            console.log(addButtonNode(left, top, jsx.props));

            // ノードの追加やで
            node.argument.children.push(addButtonNode(left, top, jsx.props));
          });
        }
        return node;
      },
      fallback: "iteration"
    });

    console.log("置換完了");
    console.log(ast);

    let newFileContents;
    try {
      newFileContents = escodegen.generate(ast);
    } catch (e) {
      console.log("error だぜ");
      console.error(e);
    }
    console.log("new file contents", newFileContents);

    fs.writeFile(sourceFilePath, newFileContents, "utf8", err => {
      console.error(err);
    });
    res.json({ message: "success" });
  });
});

app.get("/move_box", (req, res, next) => {
  const { style } = req.query;

  const cssInJs = JSToCSS(style);

  fs.readFile(sourceFilePath, "utf8", async (err, data) => {
    if (err) throw err;

    // ソースコードを書き換える
    const ast = esprima.parseModule(data, { jsx: true });

    res.json({ ast: ast });

    // estraverse.replace(ast, {
    //   enter: function (node, parent) {
    //     if (node.type === 'JSXElement' && node.openingElement.name.name === 'NavigationBar') {
    //       node.openingElement.attributes.forEach((attribute, attribute_key) => {
    //         if (attribute.name.name === 'styles') {
    //           attribute.value.expression.properties.forEach((property, property_key) => {
    //             if (property.key.name === 'left' || property.key.name === 'top') {
    //               node.openingElement.attributes[attribute_key].value.expression.properties[property_key].value.value = +res.query[property.key.name];
    //               node.openingElement.attributes[attribute_key].value.expression.properties[property_key].value.raw = res.query[property.key.name];
    //             }
    //           })
    //         }
    //       })
    //     }
    //     return node;
    //   },
    //   fallback: 'iteration'
    // });
    //
    // const newFileContents = escodegen.generate(ast);
    // res.json({message: ast});
  });
});

app.listen(3456, () => {
  console.log("Server running on port 3456");
});

function styleAttribute(left, top) {
  return {
    type: "JSXAttribute",
    name: {
      type: "JSXIdentifier",
      name: "style"
    },
    value: {
      type: "JSXExpressionContainer",
      expression: {
        type: "ObjectExpression",
        properties: [
          {
            type: "Property",
            key: {
              type: "Identifier",
              name: "left"
            },
            computed: false,
            value: {
              type: "Literal",
              value: Number(left),
              raw: `'${left}'`
            },
            kind: "init",
            method: false,
            shorthand: false
          },
          {
            type: "Property",
            key: {
              type: "Identifier",
              name: "top"
            },
            computed: false,
            value: {
              type: "Literal",
              value: Number(top),
              raw: `'${top}'`
            },
            kind: "init",
            method: false,
            shorthand: false
          },
          {
            type: "Property",
            key: {
              type: "Identifier",
              name: "position"
            },
            computed: false,
            value: {
              type: "Literal",
              value: "fixed",
              raw: "'fixed'"
            },
            kind: "init",
            method: false,
            shorthand: false
          }
        ]
      }
    }
  };
}

function propsAttributes(props) {
  return Object.keys(props)
    .map(propName => {
      const propType = typeof props[propName];

      // 'children'はタグ内部に書く為
      if (propName !== "children" && props[propName] !== null) {
        // 'Literal' か 'JSXExpressionContainer' で内容が異なる
        if (propType === "string") {
          return {
            type: "JSXAttribute",
            name: {
              type: "JSXIdentifier",
              name: propName
            },
            value: {
              type: "Literal",
              value: String(props[propName]),
              raw: `'${props[propName]}'`
            }
          };
        } else {
          return {
            type: "JSXAttribute",
            name: {
              type: "JSXIdentifier",
              name: propName
            },
            value: {
              type: "JSXExpressionContainer",
              expression: {
                type: "Literal",
                value: props[propName],
                raw: String(props[propName])
              }
            }
          };
        }
      }
    })
    .filter(value => value);
}

function addButtonNode(left, top, props) {
  // console.log(props);
  // console.log('propsやで');
  //
  // console.log('prop attributesは');
  // console.log(JSON.stringify([
  //   ...propsAttributes(props),
  //   styleAttribute(left, top)
  // ]));
  // console.log('attribute の結果でした');

  return {
    type: "JSXElement",
    openingElement: {
      type: "JSXOpeningElement",
      name: {
        type: "JSXIdentifier",
        name: "Button"
      },
      selfClosing: false,
      attributes: [...propsAttributes(props), styleAttribute(left, top)]
    },
    children: [
      {
        type: "JSXText",
        value: props.children, // TODO: ここ文字列以外が来たらエラーになるよな
        raw: props.children
      }
    ],
    closingElement: {
      type: "JSXClosingElement",
      name: {
        type: "JSXIdentifier",
        name: "Button"
      }
    }
  };

  const attributes = [
    {
      type: "JSXAttribute",
      name: {
        type: "JSXIdentifier",
        name: "style"
      },
      value: {
        type: "JSXExpressionContainer",
        expression: {
          type: "ObjectExpression",
          properties: [
            {
              type: "Property",
              key: {
                type: "Identifier",
                name: "left"
              },
              computed: false,
              value: {
                type: "Literal",
                value: Number(left),
                raw: String(left)
              },
              kind: "init",
              method: false,
              shorthand: false
            },
            {
              type: "Property",
              key: {
                type: "Identifier",
                name: "top"
              },
              computed: false,
              value: {
                type: "Literal",
                value: Number(top),
                raw: String(top)
              },
              kind: "init",
              method: false,
              shorthand: false
            },
            {
              type: "Property",
              key: {
                type: "Identifier",
                name: "position"
              },
              computed: false,
              value: {
                type: "Literal",
                value: "fixed",
                raw: "'fixed'"
              },
              kind: "init",
              method: false,
              shorthand: false
            }
          ]
        }
      }
    }
  ];

  let childValue = "";
  Object.keys(props).forEach(propName => {
    if (propName === "children") {
      childValue = props[propName] ? props[propName] : "";
      return;
    }
    if (props[propName] === null) return;
    attributes.push({
      type: "JSXAttribute",
      name: {
        type: "JSXIdentifier",
        name: propName
      },
      value: {
        type: "Literal",
        value: props[propName],
        raw: props[propName]
      }
    });
  });

  const buttonNode = {
    type: "JSXElement",
    openingElement: {
      type: "JSXOpeningElement",
      name: {
        type: "JSXIdentifier",
        name: "Button"
      },
      selfClosing: false,
      attributes
    },
    children: [
      {
        type: "JSXText",
        value: childValue,
        raw: childValue
      }
    ],
    closingElement: {
      type: "JSXClosingElement",
      name: {
        type: "JSXIdentifier",
        name: "Button"
      }
    }
  };

  return buttonNode;
}

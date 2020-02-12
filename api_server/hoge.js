const hoge = {
  type: "Program",
  body: [{
    type: "ImportDeclaration",
    specifiers: [{type: "ImportDefaultSpecifier", local: {type: "Identifier", name: "Button"}}],
    source: {type: "Literal", value: "@material-ui/core/Button", raw: "'@material-ui/core/Button'"}
  }, {
    type: "ImportDeclaration",
    specifiers: [{type: "ImportDefaultSpecifier", local: {type: "Identifier", name: "Button"}}],
    source: {type: "Literal", value: "@material-ui/core/Button", raw: "'@material-ui/core/Button'"}
  }, {
    type: "ImportDeclaration",
    specifiers: [{type: "ImportDefaultSpecifier", local: {type: "Identifier", name: "React"}}],
    source: {type: "Literal", value: "react", raw: "'react'"}
  }, {
    type: "FunctionDeclaration", id: {type: "Identifier", name: "App"}, params: [], body: {
      type: "BlockStatement", body: [{
        type: "ReturnStatement", argument: {
          type: "JSXElement",
          openingElement: {
            type: "JSXOpeningElement",
            name: {type: "JSXIdentifier", name: "div"},
            selfClosing: false,
            attributes: [{
              type: "JSXAttribute",
              name: {type: "JSXIdentifier", name: "className"},
              value: {type: "Literal", value: "App", raw: "'App'"}
            }]
          },
          children: [{type: "JSXText", value: "\n      ", raw: "\n      "}, {
            type: "JSXElement",
            openingElement: {
              type: "JSXOpeningElement",
              name: {type: "JSXIdentifier", name: "Button"},
              selfClosing: false,
              attributes: [{
                type: "JSXAttribute",
                name: {type: "JSXIdentifier", name: "variant"},
                value: {type: "Literal", value: "contained", raw: "'contained'"}
              }, {
                type: "JSXAttribute",
                name: {type: "JSXIdentifier", name: "styles"},
                value: {
                  type: "JSXExpressionContainer",
                  expression: {
                    type: "ObjectExpression",
                    properties: [{
                      type: "Property",
                      key: {type: "Identifier", name: "left"},
                      computed: false,
                      value: {type: "Literal", value: 20, raw: "20"},
                      kind: "init",
                      method: false,
                      shorthand: false
                    }, {
                      type: "Property",
                      key: {type: "Identifier", name: "top"},
                      computed: false,
                      value: {type: "Literal", value: 180, raw: "180"},
                      kind: "init",
                      method: false,
                      shorthand: false
                    }, {
                      type: "Property",
                      key: {type: "Identifier", name: "position"},
                      computed: false,
                      value: {type: "Literal", value: "fixed", raw: "'fixed'"},
                      kind: "init",
                      method: false,
                      shorthand: false
                    }]
                  }
                }
              }, {
                type: "JSXAttribute",
                name: {type: "JSXIdentifier", name: "disabled"},
                value: {type: "JSXExpressionContainer", expression: {type: "Literal", value: false, raw: "false"}}
              }]
            },
            children: [{type: "JSXText", value: "ボタンやで", raw: "ボタンやで"}],
            closingElement: {type: "JSXClosingElement", name: {type: "JSXIdentifier", name: "Button"}}
          }, {type: "JSXText", value: "\n  ", raw: "\n  "}, {
            type: "JSXElement",
            "openin{type:"JSXOpeningElement
            ",name:{type:"JSXIdentifier
            ",name:"Button
            "},selfClosing:false,attributes:[{type:"JSXAttribute
            ",name:{type:"JSXIdentifier
            ",name:"color
            "},value:{type:"Literal
            ",expression:{type:"Literal
            ",value:"
            default",raw:"
            default"}}},{type:"
            JSXAttribute",name:{type:"
            JSXIdentifier",name:"
            component"},value:{type:"
            Literal",expression:{type:"
            Literal",value:"
            button",raw:"
            button"}}},{type:"
            JSXAttribute",name:{type:"
            JSXIdentifier",name:"
            disabled"},value:{type:"
            JSXExpressionContainer",expression:{type:"
            Literal",value:false,raw:false}}},{type:"
            JSXAttribute",name:{type:"
            JSXIdentifier",name:"
            disableElevation"},value:{type:"
            JSXExpressionContainer",expression:{type:"
            Literal",value:false,raw:false}}},{type:"
            JSXAttribute",name:{type:"
            JSXIdentifier",name:"
            disableFocusRipple"},value:{type:"
            JSXExpressionContainer",expression:{type:"
            Literal",value:false,raw:false}}},{type:"
            JSXAttribute",name:{type:"
            JSXIdentifier",name:"
            fullWidth"},value:{type:"
            JSXExpressionContainer",expression:{type:"
            Literal",value:false,raw:false}}},{type:"
            JSXAttribute",name:{type:"
            JSXIdentifier",name:"
            size"},value:{type:"
            Literal",expression:{type:"
            Literal",value:"
            medium",raw:"
            medium"}}},{type:"
            JSXAttribute",name:{type:"
            JSXIdentifier",name:"
            variant"},value:{type:"
            Literal",expression:{type:"
            Literal",value:"
            contained",raw:"
            contained"}}},{type:"
            JSXAttribute",name:{type:"
            JSXIdentifier",name:"
            styles"},value:{type:"
            JSXExpressionContainer",expression:{type:"
            ObjectExpression",properties:[{type:"
            Property",key:{type:"
            Identifier",name:"
            left"},computed:false,value:{type:"
            Literal",value:20,raw:"
            20"},kind:"
            init",method:false,shorthand:false},{type:"
            Property",key:{type:"
            Identifier",name:"
            top"},computed:false,value:{type:"
            Literal",value:180,raw:"
            180"},kind:"
            init",method:false,shorthand:false},{type:"
            Property",key:{type:"
            Identifier",name:"
            position"},computed:false,value:{type:"
            Literal",value:"
            fixed",raw:"
            'fixed'"},kind:"
            init",method:false,shorthand:false}]}}}]},children:[{type:"
            JSXText",value:"
            children",raw:"
            ボタンはややこしいから、固定
"}],closingElement:{type:"
JSXClosingElement
",name:{"
tifier
",name:"
Button
"}}},{type:"
JSXElement
",openingElement:{type:"
JSXOpeningElement
",name:{type:"
JSXIdentifier
",name:"
Button
"},selfClosing:false,attributes:[{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
color
"},value:{type:"
Literal
",expression:{type:"
Literal
",value:"
default
",raw:"
default
"}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
component
"},value:{type:"
Literal
",expression:{type:"
Literal
",value:"
button
",raw:"
button
"}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
disabled
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
Literal
",value:false,raw:false}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
disableElevation
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
Literal
",value:false,raw:false}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
disableFocusRipple
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
Literal
",value:false,raw:false}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
fullWidth
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
Literal
",value:false,raw:false}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
size
"},value:{type:"
Literal
",expression:{type:"
Literal
",value:"
medium
",raw:"
medium
"}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
variant
"},value:{type:"
Literal
",expression:{type:"
Literal
",value:"
contained
",raw:"
contained
"}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
styles
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
ObjectExpression
",properties:[{type:"
Property
",key:{type:"
Identifier
",name:"
left
"},computed:false,value:{type:"
Literal
",value:131,raw:"
131
"},kind:"
init
",method:false,shorthand:false},{type:"
Property
",key:{type:"
Identifier
",name:"
top
"},computed:false,value:{type:"
Literal
",value:219,raw:"
219
"},kind:"
init
",method:false,shorthand:false},{type:"
Property
",key:{type:"
Identifier
",name:"
position
"},computed:false,value:{type:"
Literal
",value:"
fixed
",raw:"
'fixed'
"},kind:"
init
",method:false,shorthand:false}]}}}]},children:[{type:"
JSXText
",value:"
children
",raw:"
ボタンはややこしいかclosingElement
":{type:"
JSXClosingElement
",name:{type:"
JSXIdentifier
",name:"
Button
"}}},{type:"
JSXElement
",openingElement:{type:"
JSXOpeningElement
",name:{type:"
JSXIdentifier
",name:"
Button
"},selfClosing:false,attributes:[{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
color
"},value:{type:"
Literal
",expression:{type:"
Literal
",value:"
default
",raw:"
default
"}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
component
"},value:{type:"
Literal
",expression:{type:"
Literal
",value:"
button
",raw:"
button
"}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
disabled
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
Literal
",value:false,raw:false}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
disableElevation
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
Literal
",value:false,raw:false}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
disableFocusRipple
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
Literal
",value:false,raw:false}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
fullWidth
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
Literal
",value:false,raw:false}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
size
"},value:{type:"
Literal
",expression:{type:"
Literal
",value:"
medium
",raw:"
medium
"}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
variant
"},value:{type:"
Literal
",expression:{type:"
Literal
",value:"
contained
",raw:"
contained
"}}},{type:"
JSXAttribute
",name:{type:"
JSXIdentifier
",name:"
styles
"},value:{type:"
JSXExpressionContainer
",expression:{type:"
ObjectExpression
",properties:[{type:"
Property
",key:{type:"
Identifier
",name:"
left
"},computed:false,value:{type:"
Literal
",value:187,raw:"
187
"},kind:"
init
",method:false,shorthand:false},{type:"
Property
",key:{type:"
Identifier
",name:"
top
"},computed:false,value:{type:"
Literal
",value:180,raw:"
180
"},kind:"
init
",method:false,shorthand:false},{type:"
Property
",key:{type:"
Identifier
",name:"
position
"},computed:false,value:{type:"
Literal
",value:"
fixed
",raw:"
'fixed'
"},kind:"
init
",method:false,shorthand:false}]}}}]},children:[{type:"
JSXText
",value:"
children
",raw:"
ボタンはややこしいから、固定
"}],closingElement:{type:"
JSXClosingElement
",name:{type:"
JSXIdentifier
",name:"
Button
"}}}],closingElement:{type:"
JSXClosingElement
",name:{"
typeer
",name:"
div
"}}}}]},generator:false,expression:false,async:false},{type:"
ExportDefaultDeclaration
",declaration:{type:"
Identifier
",name:"
App
"}}],sourceType:"
module
"};

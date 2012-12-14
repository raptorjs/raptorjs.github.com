$rset("resource","/raptor/templating/taglibs/html/html.rtld","<raptor-taglib>\n    \n    \n    <tlib-version>1.0</tlib-version>\n    <short-name>html</short-name>\n    <uri>http://raptorjs.org/templates/html</uri>\n\n    <tag>\n        \n        <name>pre</name> \n        <uri></uri> <!-- Register attributes supported by all tags in all namespaces -->\n        \n        <!-- Compiler that applies to all tags as well -->\n        <transformer>\n            <class-name>raptor/templating/taglibs/html/HtmlTagTransformer</class-name>\n        </transformer>\n    </tag>\n    \n    <tag>\n        \n        <name>html</name> \n        <uri></uri> <!-- Register attributes supported by all tags in all namespaces -->\n        \n        <attribute name=\"doctype\" type=\"string\"/>\n        \n        <!-- Compiler that applies to all tags as well -->\n        <transformer>\n            <class-name>raptor/templating/taglibs/html/HtmlTagTransformer</class-name>\n        </transformer>\n    </tag>\n\n    <tag>\n        <name>doctype</name>\n        <attribute name=\"value\" type=\"custom\"/>\n        <node-class>raptor/templating/taglibs/html/DocTypeNode</node-class>\n    </tag>\n    \n    <tag>\n        \n        <name>*</name> \n        <uri>*</uri> <!-- Register attributes supported by all tags in all namespaces -->\n        \n        <!-- Compiler that applies to all tags as well -->\n        <transformer>\n            <class-name>raptor/templating/taglibs/html/HtmlTagTransformer</class-name>\n        </transformer>\n    </tag>\n    \n</raptor-taglib>");$radd("rtld","/raptor/templating/taglibs/html/html.rtld");
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,a){"use strict";var r=a(2),n=a(6),l=a(0),o=a.n(l),c=a(99),i=a(98),m=a(97),s=a(100),u=a(47),d=a.n(u);function f(e){var t=e.to,a=e.href,l=e.label,c=e.prependBaseUrlToHref,m=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(s.a)(t),d=Object(s.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?d:a}:{to:u},m),l)}var g=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},n=r.copyright,l=r.links,i=void 0===l?[]:l,u=r.logo,h=void 0===u?{}:u,E=Object(s.a)(h.src);return a?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},i&&i.length>0&&o.a.createElement("div",{className:"row footer__links"},i.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(f,e))}))):null)}))),(h||n)&&o.a.createElement("div",{className:"text--center"},h&&h.src&&o.a.createElement("div",{className:"margin-bottom--sm"},h.href?o.a.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},o.a.createElement(g,{alt:h.alt,url:E})):o.a.createElement(g,{alt:h.alt,url:E})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))):null}},83:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),l=a.n(n),o=a(99),c=a(101),i=a(98),m=a(97),s=a(100),u=a(84),d=a.n(u),f=[{title:l.a.createElement(l.a.Fragment,null,"Easy to Use"),imageUrl:"img/imagehomeone.svg",description:l.a.createElement(l.a.Fragment,null,"Mathium was designed from the ground up to be easily installed and used to get your application's math and computational functionality up and running.")},{title:l.a.createElement(l.a.Fragment,null,"Focus on What Matters"),imageUrl:"img/imagehometwo.svg",description:l.a.createElement(l.a.Fragment,null,"Can you ever imagine having to write out all of our functions yourself? Mathium lets you focus on what really matters in your code while we take care of the math and computational functionality.")},{title:l.a.createElement(l.a.Fragment,null,"Optimized for producing scalable TypeScript/JS applications"),imageUrl:"img/imagehomethree.svg",description:l.a.createElement(l.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function g(e){var t=e.imageUrl,a=e.title,r=e.description,n=Object(s.a)(t);return l.a.createElement("div",{className:Object(o.a)("col col--4",d.a.feature)},n&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:d.a.featureImage,src:n,alt:a})),l.a.createElement("h3",null,a),l.a.createElement("p",null,r))}t.default=function(){var e=Object(m.a)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(c.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},l.a.createElement("header",{className:Object(o.a)("hero hero--primary",d.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("p",{className:"hero__subtitle"},t.tagline),l.a.createElement("div",{className:d.a.buttons},l.a.createElement(i.a,{className:Object(o.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(s.a)("docs/")},"Get Started")))),l.a.createElement("main",null,f&&f.length>0&&l.a.createElement("section",{className:d.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},f.map((function(e,t){return l.a.createElement(g,Object(r.a)({key:t},e))})))))))}}}]);
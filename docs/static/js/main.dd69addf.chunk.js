(this["webpackJsonpplantilla-react"]=this["webpackJsonpplantilla-react"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),o=s(7),i=s.n(o),a=(s(17),s(5)),c=s(6),l=(s(18),s(8)),p=(s(19),s.p+"static/media/logo-slogan.03d2cb1c.png"),u=s(0),m=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{className:"header__title",children:"Pokemon's list"}),Object(u.jsx)("img",{src:p,alt:"Pokemon List",className:"header__img"})]})},h=s(9),j=s(10),d=s(12),b=s(11),k=(s(21),function(e){var t;t=null===e.pokeEv?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)("p",{className:"article__ev",children:["Evolves from ",Object(u.jsx)("span",{className:"article__ev capitalize",children:e.pokeEv})]});var s=e.pokeType.map((function(e,t){return Object(u.jsx)("li",{className:"article__type--item",children:e},t)}));return Object(u.jsxs)("article",{className:"article",id:e.id,onClick:function(){e.handlePokemon(e.id)},children:[Object(u.jsx)("img",{src:e.img,alt:e.pokeName,className:"article__img"}),Object(u.jsx)("h2",{className:"article__name",children:e.pokeName}),t,Object(u.jsx)("h3",{className:"article__type",children:"Type:"}),Object(u.jsx)("ul",{children:s})]})}),g=(s(22),function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.pokemons.map((function(t,s){return Object(u.jsx)("li",{className:"pokeCard__item",id:t.id,children:Object(u.jsx)(k,{id:t.id,img:t.url,pokeName:t.name,pokeType:t.types,pokeEv:t.evolution,handlePokemon:e.props.handlePokemon})},s)}));return Object(u.jsx)("ul",{className:"pokeCard",children:t})}}]),s}(r.a.Component)),O=(s(23),function(){return Object(u.jsxs)("footer",{children:[" ",Object(u.jsxs)("span",{className:"footer__span fly-in-bottom",children:["Design & code by"," ",Object(u.jsxs)("a",{className:"footer__span--link",href:"https://github.com/2y2son4",target:"_blank",rel:"noreferrer",children:[" ","2y2son4"]}),"\ud83d\udc7d"]})]})}),f=function(){var e,t,s=Object(n.useState)(l),r=Object(c.a)(s,1)[0],o=Object(n.useState)([]),i=Object(c.a)(o,2),p=i[0],h=i[1],j=function(e){var t=p.findIndex((function(t){return t.id===e}));if(-1===t){var s=r.find((function(t){return t.id===e}));p.push(s),h(Object(a.a)(p))}else p.splice(t,1),h(Object(a.a)(p))};return 0!==p.length?e="Favorite Pokemons":(e="",t="none"),Object(u.jsxs)("div",{className:"App App-header",children:[Object(u.jsx)(m,{}),Object(u.jsxs)("main",{children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{className:"favs__title",children:"List of Pokemons"}),Object(u.jsx)(g,{pokemons:r,handlePokemon:j})]}),Object(u.jsxs)("section",{className:"favs",children:[Object(u.jsx)("h2",{className:"favs__title "+t,children:e}),Object(u.jsx)(g,{pokemons:p,handlePokemon:j})]})]}),Object(u.jsx)(O,{})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.dd69addf.chunk.js.map
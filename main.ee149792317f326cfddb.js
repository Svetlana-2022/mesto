(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e){var r=this,o=e.url,i=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"addCard",(function(e){var t=e.name,n=e.link;return fetch("".concat(r._url,"cards"),{method:"POST",headers:r._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))})),t(this,"deleteCard",(function(e){return fetch("".concat(r._url,"cards/").concat(e),{method:"DELETE",headers:r._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))})),t(this,"likeCard",(function(e){return fetch("".concat(r._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:r._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))})),t(this,"inLikeCard",(function(e){return fetch("".concat(r._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:r._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))})),this._url=o,this._headers=i}var r,o;return r=n,o=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка ".concat(e.status))}))}},{key:"updateProfileInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"updateProfileAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка ".concat(e.status))}))}}],o&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t.link,this._name=t.name,this._likes=t.likes,this.isLike=a(this._likes),this._id=t._id,this._owner=t.owner._id,console.log(this._owner),this._isOwner=i(this._owner),console.log(this._isOwner),this._templateSelector=n,this._handleCardClick=r,this._handleDelClick=o.bind(this),this._handleLikesCard=u.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage=this._element.querySelector(".element__mask-group"),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._isOwner&&(this._cardTrash=this._element.querySelector(".element__trash"),this._cardTrash.addEventListener("click",(function(){e._handleDeleteCard}))),this._likeButton=this._element.querySelector(".element__like"),this._likeButton.addEventListener("click",(function(){e._handlelike()}))}},{key:"_handlelike",value:function(){this._isOwner&&handleLikesCard(this._owner)}},{key:"addLike",value:function(){this._likeButton.classList.add("element__like_active")}},{key:"deleteLike",value:function(){this._likeButton.classList.remove("element__like_active")}},{key:"setLike",value:function(e){this._likes=e,this._cardLikeCount.textContent=this._likes.length}},{key:"_handleDeleteCard",value:function(){this._isOwner&&handleDelClick(this._owner)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle=this._element.querySelector(".element__title"),this._cardTitle.textContent=this._name,this._cardLikeCount=this._element.querySelector(".element__like-count"),this._cardLikeCount.textContent=this._likes.length,this._isOwner||this._cardTrash.remove(),this._element}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close(document.querySelector(".popup_opened"))}},{key:"setEventListeners",value:function(){var e=this;this._closeIcon=this._popupSelector.querySelector(".popup__close-icon"),this._closeIcon.addEventListener("click",(function(){e.close()})),this._popupSelector.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close(t.target)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImg=t._popupSelector.querySelector(".popup__el-img"),t._popupCaption=t._popupSelector.querySelector(".popup__el-caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.data;f(_(a.prototype),"open",this).call(this),this._popupImg.src=t.link,this._popupImg.alt=t.name,this._popupCaption.textContent=t.name}},{key:"setEventListeners",value:function(){f(_(a.prototype),"setEventListeners",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit,o=e.handleFormPreFill;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t._inputList=t._popupSelector.querySelectorAll(".form__input"),Array.from(t._inputList),t._handleFormPreFill=o,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;b(w(a.prototype),"setEventListeners",this).call(this),this._form=this._popupSelector.querySelector(".form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()}))}},{key:"open",value:function(){this._handleFormPreFill&&this._handleFormPreFill(this._inputList),b(w(a.prototype),"open",this).call(this)}},{key:"close",value:function(){b(w(a.prototype),"close",this).call(this),this._form.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t._inputList=t._popupSelector.querySelectorAll(".form__input"),Array.from(t._inputList),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value,console.log(e)})),e}},{key:"setEventListeners",value:function(){var e=this;L(T(a.prototype),"setEventListeners",this).call(this),this._form=this._popupSelector.querySelector(".form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()}))}},{key:"open",value:function(){L(T(a.prototype),"open",this).call(this)}},{key:"close",value:function(){L(T(a.prototype),"close",this).call(this),this._form.reset()}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return this.userData={nameInput:this._userName.textContent,jobInput:this._userJob.textContent},this.userData}},{key:"setUserInfo",value:function(e){var t=e.nameInput,n=e.jobInput,r=e._id;this._userName.textContent=t,this._userJob.textContent=n,this._id=r}},{key:"setUserInfoAvatar",value:function(e){var t=e.avatar;this._avatar.src=t}}],n&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._settings=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.add(this._settings.inputErrorClass),this._errorElement.textContent=t,this._errorElement.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._settings.inputErrorClass),this._errorElement.classList.remove(this._settings.errorClass),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=document.querySelector(".popup_for_edit").querySelector(".form_for_edit"),F=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),J=document.querySelector(".popup_for_card").querySelector(".form_for_card"),H=(document.querySelector(".element__trash"),document.querySelector(".popup_for_delete"),document.querySelector(".profile__avatar")),M=document.querySelector(".form__submit-button_for_delete"),z=new B(V,D);z.enableValidation();var $=new B(J,D);$.enableValidation();var G=new c(".popup_for_delete");function K(e){var t=this;M.addEventListener("click",(function(){ie.deleteCard(e).then((function(){t._element.remove()})).catch((function(e){return console.log(e)}))})),G.open(),G.setEventListeners()}H.addEventListener("click",(function(){Q.open()}));var Q=new q({popupSelector:".popup_for_avatar",handleSubmit:function(e){var t=e.avatar;console.log({avatar:t}),ie.updateProfileAvatar({avatar:t}).then((function(e){W.setUserInfoAvatar({avatar:e.avatar}),console.log(e)})).catch((function(e){return console.log(e)}))}});Q.setEventListeners(),N.addEventListener("click",(function(){ae.open(),J.reset(),$.resetValidation()}));var W=new x({nameSelector:".profile__title",jobSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),X=new E({popupSelector:".popup_for_edit",handleSubmit:function(e){var t=e.nameInput,n=e.jobInput;console.log({nameInput:t,jobInput:n}),ie.updateProfileInfo({name:t,about:n}).then((function(e){W.setUserInfo({nameInput:e.name,jobInput:e.about})})).catch((function(e){return console.log(e)}))},handleFormPreFill:function(e){var t=W.getUserInfo();e.forEach((function(e){return e.value=t[e.name]}))}});X.setEventListeners(),F.addEventListener("click",(function(){X.open(),z.resetValidation()}));var Y=new y(".popup_for_img");function Z(e,t){Y.open({data:{link:e,name:t}}),Y.setEventListeners()}var ee=function(e){return W._id===e},te=function(e){return e.some((function(e){return W._id===e._id}))},ne=function(e){card.isLike?ie.likeCard(e).this((function(e){card.addLike(),card.setLike(e.likes)})).catch((function(e){return console.log(e)})):ie.inLikeCard(e).then((function(e){card.deleteLike(),card.setLike(e.likes)})).catch((function(e){return console.log(e)}))};function re(e){return new o(e,".element-template",Z,K,ee,te,ne).generateCard()}var oe=new a({renderer:function(e){oe.addItem(re(e))}},".groups__elements"),ie=new n({url:"https://mesto.nomoreparties.co/v1/cohort-46/",headers:{authorization:"30876ae6-9c71-4f9d-a726-3e14bc235ea6","Content-Type":"application/json"}}),ae=new E({popupSelector:".popup_for_card",handleSubmit:function(e){var t=e.linkCard,n=e.nameCard;ie.addCard({link:t,name:n}).then((function(e){oe.addItem(re(e))})).catch((function(e){return console.log(e)})),ae.close()}});ae.setEventListeners(),ie.getUserInfo().then((function(e){var t=e.name,n=e.about,r=e.avatar;W.setUserInfo({nameInput:t,jobInput:n}),W.setUserInfoAvatar({avatar:r})})).catch((function(e){return console.log(e)})),Promise.all([ie.getUserInfo(),ie.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo(o),oe.renderItems(i)})).catch((function(e){return console.log(e)}))})();
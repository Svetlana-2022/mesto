(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e){var r=this,o=e.url,i=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"addCard",(function(e){var t=e.name,n=e.link;return fetch("".concat(r._url,"cards"),{method:"POST",headers:r._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))})),t(this,"deleteCard",(function(e){return fetch("".concat(r._url,"cards/").concat(e),{method:"DELETE",headers:r._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))})),this._url=o,this._headers=i}var r,o;return r=n,o=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка ".concat(e.status))}))}},{key:"updateProfileInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"updateProfileAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка ".concat(e.status))}))}},{key:"likeCard",value:function(){return fetch("".concat(this._url,"cards/").concat(id,"/").concat(likes),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}},{key:"inLikeCard",value:function(){return fetch("".concat(this._url,"cards/").concat(id,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status," ").concat(e.statusText))}))}}],o&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t.link,this._name=t.name,this._likes=t.likes,this._id=t._id,this._templateSelector=n,this._handleCardClick=r,this._handleDelClick=o,this._api=i}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage=this._element.querySelector(".element__mask-group"),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._cardTrash=this._element.querySelector(".element__trash"),this._cardTrash.addEventListener("click",(function(){e._handleDelClick(e._handleDeleteCard)})),this._likeButton=this._element.querySelector(".element__like"),this._likeButton.addEventListener("click",(function(){e._handlelike()}))}},{key:"_handlelike",value:function(){this._likeButton.classList.toggle("element__like_active"),this._likeButton.classList.contains("element__like_active"),this._likes.length}},{key:"_handleDeleteCard",value:function(){var e=this;this._api.deleteCard(this._id).then((function(){e._element.remove()})).catch((function(e){return console.log(e)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle=this._element.querySelector(".element__title"),this._cardTitle.textContent=this._name,this._cardLikeCount=this._element.querySelector(".element__like-count"),this._cardLikeCount.textContent=this._likes.length,this._element}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close(document.querySelector(".popup_opened"))}},{key:"setEventListeners",value:function(){var e=this;this._closeIcon=this._popupSelector.querySelector(".popup__close-icon"),this._closeIcon.addEventListener("click",(function(){e.close()})),this._popupSelector.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close(t.target)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImg=t._popupSelector.querySelector(".popup__el-img"),t._popupCaption=t._popupSelector.querySelector(".popup__el-caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.data;f(_(a.prototype),"open",this).call(this),this._popupImg.src=t.link,this._popupImg.alt=t.name,this._popupCaption.textContent=t.name}},{key:"setEventListeners",value:function(){f(_(a.prototype),"setEventListeners",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit,o=e.handleFormPreFill;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t._inputList=t._popupSelector.querySelectorAll(".form__input"),Array.from(t._inputList),t._handleFormPreFill=o,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;b(E(a.prototype),"setEventListeners",this).call(this),this._form=this._popupSelector.querySelector(".form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()}))}},{key:"open",value:function(){this._handleFormPreFill&&this._handleFormPreFill(this._inputList),b(E(a.prototype),"open",this).call(this)}},{key:"close",value:function(){b(E(a.prototype),"close",this).call(this),this._form.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function L(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t._inputList=t._popupSelector.querySelectorAll(".form__input"),Array.from(t._inputList),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value,console.log(e)})),e}},{key:"setEventListeners",value:function(){var e=this;P(q(a.prototype),"setEventListeners",this).call(this),this._form=this._popupSelector.querySelector(".form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()}))}},{key:"open",value:function(){P(q(a.prototype),"open",this).call(this)}},{key:"close",value:function(){P(q(a.prototype),"close",this).call(this),this._form.reset()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return this.userData={nameInput:this._userName.textContent,jobInput:this._userJob.textContent},this.userData}},{key:"setUserInfo",value:function(e){var t=e.nameInput,n=e.jobInput,r=e._id;this._userName.textContent=t,this._userJob.textContent=n,this._id=r}},{key:"setUserInfoAvatar",value:function(e){var t=e.avatar;this._avatar.src=t}}],n&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._settings=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.add(this._settings.inputErrorClass),this._errorElement.textContent=t,this._errorElement.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._settings.inputErrorClass),this._errorElement.classList.remove(this._settings.errorClass),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},U=document.querySelector(".popup_for_edit").querySelector(".form_for_edit"),V=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-button"),N=document.querySelector(".popup_for_card").querySelector(".form_for_card"),J=(document.querySelector(".element__trash"),document.querySelector(".popup_for_delete"),document.querySelector(".profile__avatar")),H=document.querySelector(".form__submit-button_for_delete"),z=new c(".popup_for_delete");function M(e){H.addEventListener("click",e),z.open(),z.setEventListeners()}J.addEventListener("click",(function(){G.open()}));var G=new T({popupSelector:".popup_for_avatar",handleSubmit:function(e){var t=e.avatar;console.log({avatar:t}),te.updateProfileAvatar({avatar:t}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}});G.setEventListeners();var K=new D(U,A);K.enableValidation();var Q=new D(N,A);Q.enableValidation(),F.addEventListener("click",(function(){ne.open(),N.reset(),Q.resetValidation()}));var W=new x({nameSelector:".profile__title",jobSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),X=new w({popupSelector:".popup_for_edit",handleSubmit:function(e){var t=e.nameInput,n=e.jobInput;console.log({nameInput:t,jobInput:n}),te.updateProfileInfo({name:t,about:n}).then((function(e){W.setUserInfo({nameInput:e.name,jobInput:e.about}),console.log({nameInput:e.name,jobInput:e.about})})).catch((function(e){return console.log(e)}))},handleFormPreFill:function(e){var t=W.getUserInfo();e.forEach((function(e){return e.value=t[e.name]}))}});X.setEventListeners(),V.addEventListener("click",(function(){X.open(),K.resetValidation()}));var Y=new y(".popup_for_img");function Z(e,t){Y.open({data:{link:e,name:t}}),Y.setEventListeners()}function $(e){return new o(e,".element-template",Z,M,te).generateCard()}var ee=new a({renderer:function(e){ee.addItem($(e))}},".groups__elements"),te=new n({url:"https://mesto.nomoreparties.co/v1/cohort-46/",headers:{authorization:"30876ae6-9c71-4f9d-a726-3e14bc235ea6","Content-Type":"application/json"}});te.getInitialCards().then((function(e){ee.renderItems(e)})).catch((function(e){return console.log(e)}));var ne=new w({popupSelector:".popup_for_card",handleSubmit:function(e){var t=e.linkCard,n=e.nameCard;te.addCard({link:t,name:n}).then((function(e){ee.addItem($(e))})).catch((function(e){return console.log(e)})),ne.close()}});ne.setEventListeners(),te.getUserInfo().then((function(e){var t=e.name,n=e.about,r=e.avatar;W.setUserInfo({nameInput:t,jobInput:n}),W.setUserInfoAvatar({avatar:r})})).catch((function(e){return console.log(e)})),te.getUserInfo().then((function(e){W.setUserInfo(e)})).catch((function(e){return console.log(e)}))})();
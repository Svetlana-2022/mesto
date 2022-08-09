(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._likes=e.likes,this._id=e.owner._id,console.log(e.owner._id),this._templateSelector=n,this._handleCardClick=r,this._handleDelClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage=this._element.querySelector(".element__mask-group"),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._cardTrash=this._element.querySelector(".element__trash"),this._cardTrash.addEventListener("click",(function(){e._handleDelClick()})),this._likeButton=this._element.querySelector(".element__like"),this._likeButton.addEventListener("click",(function(){e._handlelike()}))}},{key:"_handlelike",value:function(){this._likeButton.classList.toggle("element__like_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle=this._element.querySelector(".element__title"),this._cardTitle.textContent=this._name,this._cardLikeCount=this._element.querySelector(".element__like-count"),this._cardLikeCount.textContent=this._likes.lenght,this._id||this._cardTrash.remove(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close(document.querySelector(".popup_opened"))}},{key:"setEventListeners",value:function(){var e=this;this._closeIcon=this._popupSelector.querySelector(".popup__close-icon"),this._closeIcon.addEventListener("click",(function(){e.close()})),this._popupSelector.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close(t.target)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImg=t._popupSelector.querySelector(".popup__el-img"),t._popupCaption=t._popupSelector.querySelector(".popup__el-caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.data;c(f(a.prototype),"open",this).call(this),this._popupImg.src=t.link,this._popupImg.alt=t.name,this._popupCaption.textContent=t.name}},{key:"setEventListeners",value:function(){c(f(a.prototype),"setEventListeners",this).call(this)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit,o=e.handleFormPreFill;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t._inputList=t._popupSelector.querySelectorAll(".form__input"),Array.from(t._inputList),t._handleFormPreFill=o,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;d(S(a.prototype),"setEventListeners",this).call(this),this._form=this._popupSelector.querySelector(".form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()}))}},{key:"open",value:function(){this._handleFormPreFill&&this._handleFormPreFill(this._inputList),d(S(a.prototype),"open",this).call(this)}},{key:"close",value:function(){d(S(a.prototype),"close",this).call(this),this._form.reset()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function L(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t._inputList=t._popupSelector.querySelectorAll(".form__input"),Array.from(t._inputList),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;w(C(a.prototype),"setEventListeners",this).call(this),this._form=this._popupSelector.querySelector(".form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()}))}},{key:"open",value:function(){w(C(a.prototype),"open",this).call(this)}},{key:"close",value:function(){w(C(a.prototype),"close",this).call(this),this._form.reset()}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return this.userData={nameInput:this._userName.textContent,jobInput:this._userJob.textContent},this.userData}},{key:"setUserInfo",value:function(e){var t=e.nameInput,n=e.jobInput,r=e.avatar;this._userName.textContent=t,this._userJob.textContent=n,this._avatar.src=r}}],n&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=t,this._settings=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.add(this._settings.inputErrorClass),this._errorElement.textContent=t,this._errorElement.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._settings.inputErrorClass),this._errorElement.classList.remove(this._settings.errorClass),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},x=document.querySelector(".popup_for_edit").querySelector(".form_for_edit"),D=document.querySelector(".profile__edit-button"),V=document.querySelector(".profile__add-button"),A=document.querySelector(".popup_for_card").querySelector(".form_for_card"),F=(document.querySelector(".element__trash"),document.querySelector(".popup_for_delete"),document.querySelector(".profile__avatar")),N=new i(".popup_for_delete");function U(){N.open(),N.setEventListeners()}F.addEventListener("click",(function(){J.open()}));var J=new i(".popup_for_avatar"),z=new P({popupSelector:".popup_for_avatar",handleSubmit:function(e){var t=e.avatar;G.setUserInfo({avatar:t})}});z.setEventListeners();var M=new T(x,B);M.enableValidation();var H=new T(A,B);H.enableValidation(),V.addEventListener("click",(function(){Y.open(),A.reset(),H.resetValidation()}));var G=new q({nameSelector:".profile__title",jobSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),K=new g({popupSelector:".popup_for_edit",handleSubmit:function(e){var t=e.nameInput,n=e.jobInput;G.setUserInfo({nameInput:t,jobInput:n})},handleFormPreFill:function(e){var t=G.getUserInfo();e.forEach((function(e){return e.value=t[e.name]}))}});K.setEventListeners(),D.addEventListener("click",(function(){K.open(),M.resetValidation()}));var Q=new h(".popup_for_img");function W(e,t){Q.open({data:{link:e,name:t}}),Q.setEventListeners()}function X(e){return new t(e,".element-template",W,U).generateCard()}var Y=new g({popupSelector:".popup_for_card",handleSubmit:function(e){var t=e.linkCard,n=e.nameCard;console.log(X({link:t,name:n})),cardList.addItem(X({link:t,name:n})),Y.close()}});Y.setEventListeners(),fetch("https://nomoreparties.co/v1/cohort-46/users/me",{headers:{authorization:"30876ae6-9c71-4f9d-a726-3e14bc235ea6"}}).then((function(e){return e.json()})).then((function(e){var t=e.name,n=e.about,r=e.avatar;G.setUserInfo({nameInput:t,jobInput:n,avatar:r}),console.log(e)})),fetch("https://mesto.nomoreparties.co/v1/cohort-46/cards",{headers:{authorization:"30876ae6-9c71-4f9d-a726-3e14bc235ea6"}}).then((function(e){return e.json()})).then((function(e){var t=new r({items:e,renderer:function(e){t.addItem(X(e))}},".groups__elements");t.renderItems(),console.log(e)})),fetch("https://mesto.nomoreparties.co/v1/cohort-46/users/me",{method:"PATCH",headers:{authorization:"30876ae6-9c71-4f9d-a726-3e14bc235ea6","Content-Type":"application/json"},body:JSON.stringify({name:"Marie Skłodowska Curie",about:"Physicist and Chemist"})}),fetch("https://mesto.nomoreparties.co/v1/cohort-46/cards",{method:"POST",headers:{authorization:"30876ae6-9c71-4f9d-a726-3e14bc235ea6","Content-Type":"application/json"},body:JSON.stringify({name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"})})})();
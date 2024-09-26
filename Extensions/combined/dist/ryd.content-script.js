/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 632:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _src_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(582);
/* harmony import */ var _src_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(974);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(326);
/* harmony import */ var _src_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(210);
//---   Import Button Functions   ---//


//---   Import State Functions   ---//


//---   Import Video & Browser Functions   ---//



await (0,_src_state__WEBPACK_IMPORTED_MODULE_1__/* .initExtConfig */ .q8)();

let jsInitChecktimer = null;
let isSetInitialStateDone = false;

async function setEventListeners(evt) {
  async function checkForJS_Finish() {
    try {
      if ((0,_src_state__WEBPACK_IMPORTED_MODULE_1__/* .isShorts */ .Ee)() || ((0,_src_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getButtons */ .Y7)()?.offsetParent && (0,_src_utils__WEBPACK_IMPORTED_MODULE_2__/* .isVideoLoaded */ .Re)())) {
        clearInterval(jsInitChecktimer);
        jsInitChecktimer = null;
        (0,_src_events__WEBPACK_IMPORTED_MODULE_3__/* .createSmartimationObserver */ .lz)();
        (0,_src_events__WEBPACK_IMPORTED_MODULE_3__/* .addLikeDislikeEventListener */ .S7)();
        await (0,_src_state__WEBPACK_IMPORTED_MODULE_1__/* .setInitialState */ .m$)();
        isSetInitialStateDone = true;
        (0,_src_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.onChanged.addListener(_src_events__WEBPACK_IMPORTED_MODULE_3__/* .storageChangeHandler */ .G9);
      }
    } catch (exception) {
      if (!isSetInitialStateDone) {
        (0,_src_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)("error");
        await (0,_src_state__WEBPACK_IMPORTED_MODULE_1__/* .setInitialState */ .m$)();
      }
    }
  }

  if (jsInitChecktimer !== null) clearInterval(jsInitChecktimer);
  jsInitChecktimer = setInterval(await checkForJS_Finish, 111);
}

await setEventListeners();

document.addEventListener("yt-navigate-finish", async function (event) {
  if (jsInitChecktimer !== null) clearInterval(jsInitChecktimer);
  await setEventListeners();
});

const s = document.createElement("script");
s.src = chrome.runtime.getURL("menu-fixer.js");
s.onload = function () {
  this.remove();
};
// see also "Dynamic values in the injected code" section in this answer
(document.head || document.documentElement).appendChild(s);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ createRateBar)
/* harmony export */ });
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(582);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(974);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(326);




function createRateBar(likes, dislikes, rawLikes) {
    if ( isNaN( rawLikes ) )
        rawLikes = 0;
    console.log( likes );
    console.log( dislikes );
    console.log( rawLikes );
  let rateBar = document.getElementById("ryd-bar-container");
  if (!(0,_state__WEBPACK_IMPORTED_MODULE_1__/* .isLikesDisabled */ .d3)()) {
    // sometimes rate bar is hidden
    if (rateBar && !(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isInViewport */ .cH)(rateBar)) {
      rateBar.remove();
      rateBar = null;
    }

    const widthPx =
      parseFloat(window.getComputedStyle((0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeButton */ .UZ)()).width) +
      parseFloat(window.getComputedStyle((0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeButton */ .aj)()).width) +
      ((0,_state__WEBPACK_IMPORTED_MODULE_1__/* .isRoundedDesign */ .wv)() ? 0 : 8);

    const widthPercent =
      likes + dislikes > 0 ? (likes / (likes + dislikes)) * 100 : 50;

    var likePercentage = parseFloat(widthPercent.toFixed(1));
    const dislikePercentage = (100 - likePercentage).toLocaleString();
    likePercentage = likePercentage.toLocaleString();

    if (_state__WEBPACK_IMPORTED_MODULE_1__/* .extConfig */ .az.showTooltipPercentage) {
      var tooltipInnerHTML;
      switch (_state__WEBPACK_IMPORTED_MODULE_1__/* .extConfig */ .az.tooltipPercentageMode) {
        case "dash_dislike":
              tooltipInnerHTML = `yt:&nbsp;${likes.toLocaleString()}&nbsp;|&nbsp;ext:&nbsp;${rawLikes.toLocaleString()}&nbsp;/&nbsp;${dislikes.toLocaleString()}&nbsp;&nbsp;-&nbsp;&nbsp;${dislikePercentage}%`;
          break;
        case "both":
          tooltipInnerHTML = `${likePercentage}%&nbsp;/&nbsp;${dislikePercentage}%`;
          break;
        case "only_like":
          tooltipInnerHTML = `${likePercentage}%`;
          break;
        case "only_dislike":
          tooltipInnerHTML = `${dislikePercentage}%`;
          break;
        default: // dash_like
              tooltipInnerHTML = `yt:&nbsp;${likes.toLocaleString()}&nbsp;|&nbsp;ext:&nbsp;${rawLikes.toLocaleString()}&nbsp;&nbsp;-&nbsp;&nbsp;${likePercentage}%`;
      }
    } else {
        tooltipInnerHTML = `yt:&nbsp;${likes.toLocaleString()}&nbsp;|&nbsp;ext:&nbsp;${rawLikes.toLocaleString()}&nbsp;/&nbsp;${dislikes.toLocaleString()}`;
    }

    if (!(0,_state__WEBPACK_IMPORTED_MODULE_1__/* .isShorts */ .Ee)()) {
      if (!rateBar && !(0,_state__WEBPACK_IMPORTED_MODULE_1__/* .isMobile */ .Fr)()) {
        let colorLikeStyle = "";
        let colorDislikeStyle = "";
        if (_state__WEBPACK_IMPORTED_MODULE_1__/* .extConfig */ .az.coloredBar) {
          colorLikeStyle = "; background-color: " + (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)(true);
          colorDislikeStyle = "; background-color: " + (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)(false);
        }
        let actions =
          (0,_state__WEBPACK_IMPORTED_MODULE_1__/* .isNewDesign */ .TM)() && (0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getButtons */ .Y7)().id === "top-level-buttons-computed"
            ? (0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getButtons */ .Y7)()
            : document.getElementById("menu-container");
        (
          actions ||
          document.querySelector("ytm-slim-video-action-bar-renderer")
        ).insertAdjacentHTML(
          "beforeend",
          `
              <div class="ryd-tooltip ryd-tooltip-${(0,_state__WEBPACK_IMPORTED_MODULE_1__/* .isNewDesign */ .TM)() ? "new" : "old"}-design" style="width: ${widthPx}px">
              <div class="ryd-tooltip-bar-container">
                <div
                    id="ryd-bar-container"
                    style="width: 100%; height: 2px;${colorDislikeStyle}"
                    >
                    <div
                      id="ryd-bar"
                      style="width: ${widthPercent}%; height: 100%${colorLikeStyle}"
                      ></div>
                </div>
              </div>
              <tp-yt-paper-tooltip position="top" id="ryd-dislike-tooltip" class="style-scope ytd-sentiment-bar-renderer" role="tooltip" tabindex="-1">
                <!--css-build:shady-->${tooltipInnerHTML}
              </tp-yt-paper-tooltip>
              </div>
      		`,
        );

        if ((0,_state__WEBPACK_IMPORTED_MODULE_1__/* .isNewDesign */ .TM)()) {
          // Add border between info and comments
          let descriptionAndActionsElement = document.getElementById("top-row");
          descriptionAndActionsElement.style.borderBottom =
            "1px solid var(--yt-spec-10-percent-layer)";
          descriptionAndActionsElement.style.paddingBottom = "10px";

          // Fix like/dislike ratio bar offset in new UI
          document.getElementById("actions-inner").style.width = "revert";
          if ((0,_state__WEBPACK_IMPORTED_MODULE_1__/* .isRoundedDesign */ .wv)()) {
            document.getElementById("actions").style.flexDirection =
              "row-reverse";
          }
        }
      } else {
        document.querySelector(`.ryd-tooltip`).style.width = widthPx + "px";
        document.getElementById("ryd-bar").style.width = widthPercent + "%";
        document.querySelector("#ryd-dislike-tooltip > #tooltip").innerHTML =
          tooltipInnerHTML;
        if (_state__WEBPACK_IMPORTED_MODULE_1__/* .extConfig */ .az.coloredBar) {
          document.getElementById("ryd-bar-container").style.backgroundColor =
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)(false);
          document.getElementById("ryd-bar").style.backgroundColor =
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)(true);
        }
      }
    }
  } else {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)("removing bar");
    if (rateBar) {
      rateBar.parentNode.removeChild(rateBar);
    }   
  }
}




/***/ }),

/***/ 582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UZ: () => (/* binding */ getLikeButton),
/* harmony export */   Y7: () => (/* binding */ getButtons),
/* harmony export */   aj: () => (/* binding */ getDislikeButton),
/* harmony export */   oJ: () => (/* binding */ checkForSignInButton),
/* harmony export */   u8: () => (/* binding */ getDislikeTextContainer),
/* harmony export */   uH: () => (/* binding */ getLikeTextContainer)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(974);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(326);



function getButtons() {
  //---   If Watching Youtube Shorts:   ---//
  if ((0,_state__WEBPACK_IMPORTED_MODULE_0__/* .isShorts */ .Ee)()) {
    let elements = (0,_state__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .Fr)()
      ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelectorAll */ .vP)(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.shorts.mobile)
      : (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelectorAll */ .vP)(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.shorts.desktop);

    for (let element of elements) {
      //YouTube Shorts can have multiple like/dislike buttons when scrolling through videos
      //However, only one of them should be visible (no matter how you zoom)
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .isInViewport */ .cH)(element)) {
        return element;
      }
    }
  }
  //---   If Watching On Mobile:   ---//
  if ((0,_state__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .Fr)()) {
    return document.querySelector(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.regular.mobile);
  }
  //---   If Menu Element Is Displayed:   ---//
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.menuContainer)?.offsetParent === null) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.regular.desktopMenu);
    //---   If Menu Element Isn't Displayed:   ---//
  } else {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.regular.desktopNoMenu);
  }
}

function getLikeButton() {
  return getButtons().children[0].tagName ===
    "YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER"
    ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.likeButton.segmented) ??
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(
          _state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.likeButton.segmentedGetButtons,
          getButtons(),
        )
    : (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(
        _state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.likeButton.notSegmented,
        getButtons(),
      );
}

function getLikeTextContainer() {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.likeTextContainer, getLikeButton());
}

function getDislikeButton() {
  return getButtons().children[0].tagName ===
    "YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER"
    ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.dislikeButton.segmented) ??
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(
          _state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.dislikeButton.segmentedGetButtons,
          getButtons(),
        )
    : (0,_state__WEBPACK_IMPORTED_MODULE_0__/* .isShorts */ .Ee)()
      ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(["#dislike-button"], getButtons())
      : (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .querySelector */ .iT)(
          _state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.buttons.dislikeButton.notSegmented,
          getButtons(),
        );
}

function createDislikeTextContainer() {
  const textNodeClone = (
    getLikeButton().querySelector(
      ".yt-spec-button-shape-next__button-text-content",
    ) ||
    getLikeButton().querySelector("button > div[class*='cbox']") ||
    (
      getLikeButton().querySelector('div > span[role="text"]') ||
      document.querySelector(
        'button > div.yt-spec-button-shape-next__button-text-content > span[role="text"]',
      )
    ).parentNode
  ).cloneNode(true);
  const insertPreChild = getDislikeButton().querySelector("button");
  insertPreChild.insertBefore(textNodeClone, null);
  getDislikeButton()
    .querySelector("button")
    .classList.remove("yt-spec-button-shape-next--icon-button");
  getDislikeButton()
    .querySelector("button")
    .classList.add("yt-spec-button-shape-next--icon-leading");
  if (textNodeClone.querySelector("span[role='text']") === null) {
    const span = document.createElement("span");
    span.setAttribute("role", "text");
    while (textNodeClone.firstChild) {
      textNodeClone.removeChild(textNodeClone.firstChild);
    }
    textNodeClone.appendChild(span);
  }
  textNodeClone.innerText = "";
  return textNodeClone;
}

function getDislikeTextContainer() {
  let result;
  for (const selector of _state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.selectors.dislikeTextContainer) {
    result = getDislikeButton().querySelector(selector);
    if (result !== null) {
      break;
    }
  }
  if (result == null) {
    result = createDislikeTextContainer();
  }
  return result;
}

function checkForSignInButton() {
  if (
    document.querySelector(
      "a[href^='https://accounts.google.com/ServiceLogin']",
    )
  ) {
    return true;
  } else {
    return false;
  }
}




/***/ }),

/***/ 210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G9: () => (/* binding */ storageChangeHandler),
/* harmony export */   S7: () => (/* binding */ addLikeDislikeEventListener),
/* harmony export */   lz: () => (/* binding */ createSmartimationObserver)
/* harmony export */ });
/* unused harmony exports sendVote, likeClicked, dislikeClicked */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(582);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(974);
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(246);





function sendVote(vote) {
  if (_state__WEBPACK_IMPORTED_MODULE_2__/* .extConfig */ .az.disableVoteSubmission !== true) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getBrowser */ .X5)().runtime.sendMessage({
      message: "send_vote",
      vote: vote,
      videoId: (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getVideoId */ .jI)(window.location.href),
    });
  }
}

function updateDOMDislikes() {
  (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .setDislikes */ .rA)((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .numberFormat */ .jq)(_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.dislikes));
  (0,_bar__WEBPACK_IMPORTED_MODULE_3__/* .createRateBar */ .m)(_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.likes, _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.dislikes, _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.rawLikes);
}

function likeClicked() {
  if ((0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .checkForSignInButton */ .oJ)() === false) {
    if (_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState === _state__WEBPACK_IMPORTED_MODULE_2__/* .DISLIKED_STATE */ .w_) {
      sendVote(1);
      if (_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.dislikes > 0) _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.dislikes--;
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.likes++;
      updateDOMDislikes();
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState = _state__WEBPACK_IMPORTED_MODULE_2__/* .LIKED_STATE */ .WM;
    } else if (_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState === _state__WEBPACK_IMPORTED_MODULE_2__/* .NEUTRAL_STATE */ .cO) {
      sendVote(1);
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.likes++;
      updateDOMDislikes();
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState = _state__WEBPACK_IMPORTED_MODULE_2__/* .LIKED_STATE */ .WM;
    } else if ((_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState = _state__WEBPACK_IMPORTED_MODULE_2__/* .LIKED_STATE */ .WM)) {
      sendVote(0);
      if (_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.likes > 0) _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.likes--;
      updateDOMDislikes();
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState = _state__WEBPACK_IMPORTED_MODULE_2__/* .NEUTRAL_STATE */ .cO;
    }
    if (_state__WEBPACK_IMPORTED_MODULE_2__/* .extConfig */ .az.numberDisplayReformatLikes === true) {
      const nativeLikes = (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .getLikeCountFromButton */ .FH)();
      if (nativeLikes !== false) {
        (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .setLikes */ .xo)((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .numberFormat */ .jq)(nativeLikes));
      }
    }
  }
}

function dislikeClicked() {
  if ((0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .checkForSignInButton */ .oJ)() == false) {
    if (_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState === _state__WEBPACK_IMPORTED_MODULE_2__/* .NEUTRAL_STATE */ .cO) {
      sendVote(-1);
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.dislikes++;
      updateDOMDislikes();
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState = _state__WEBPACK_IMPORTED_MODULE_2__/* .DISLIKED_STATE */ .w_;
    } else if (_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState === _state__WEBPACK_IMPORTED_MODULE_2__/* .DISLIKED_STATE */ .w_) {
      sendVote(0);
      if (_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.dislikes > 0) _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.dislikes--;
      updateDOMDislikes();
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState = _state__WEBPACK_IMPORTED_MODULE_2__/* .NEUTRAL_STATE */ .cO;
    } else if (_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState === _state__WEBPACK_IMPORTED_MODULE_2__/* .LIKED_STATE */ .WM) {
      sendVote(-1);
      if (_state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.likes > 0) _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.likes--;
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.dislikes++;
      updateDOMDislikes();
      _state__WEBPACK_IMPORTED_MODULE_2__/* .storedData */ .KP.previousState = _state__WEBPACK_IMPORTED_MODULE_2__/* .DISLIKED_STATE */ .w_;
      if (_state__WEBPACK_IMPORTED_MODULE_2__/* .extConfig */ .az.numberDisplayReformatLikes === true) {
        const nativeLikes = (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .getLikeCountFromButton */ .FH)();
        if (nativeLikes !== false) {
          (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .setLikes */ .xo)((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .numberFormat */ .jq)(nativeLikes));
        }
      }
    }
  }
}

function addLikeDislikeEventListener() {
  if (window.rydPreNavigateLikeButton !== (0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getLikeButton */ .UZ)()) {
    (0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getLikeButton */ .UZ)().addEventListener("click", likeClicked);
    (0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getLikeButton */ .UZ)().addEventListener("touchstart", likeClicked);
    if ((0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getDislikeButton */ .aj)()) {
      (0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getDislikeButton */ .aj)().addEventListener("click", dislikeClicked);
      (0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getDislikeButton */ .aj)().addEventListener("touchstart", dislikeClicked);
      (0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getDislikeButton */ .aj)().addEventListener("focusin", updateDOMDislikes);
      (0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getDislikeButton */ .aj)().addEventListener("focusout", updateDOMDislikes);
    }
    window.rydPreNavigateLikeButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getLikeButton */ .UZ)();
  }
}

let smartimationObserver = null;

function createSmartimationObserver() {
  if (!smartimationObserver) {
    smartimationObserver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .createObserver */ .rc)(
      {
        attributes: true,
        subtree: true,
      },
      updateDOMDislikes,
    );
    smartimationObserver.container = null;
  }

  const smartimationContainer = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__/* .getButtons */ .Y7)().querySelector("yt-smartimation");
  if (
    smartimationContainer &&
    smartimationObserver.container != smartimationContainer
  ) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .cLog */ .cX)("Initializing smartimation mutation observer");
    smartimationObserver.disconnect();
    smartimationObserver.observe(smartimationContainer);
    smartimationObserver.container = smartimationContainer;
  }
}

function storageChangeHandler(changes, area) {
  if (changes.disableVoteSubmission !== undefined) {
    handleDisableVoteSubmissionChangeEvent(
      changes.disableVoteSubmission.newValue,
    );
  }
  if (changes.coloredThumbs !== undefined) {
    handleColoredThumbsChangeEvent(changes.coloredThumbs.newValue);
  }
  if (changes.coloredBar !== undefined) {
    handleColoredBarChangeEvent(changes.coloredBar.newValue);
  }
  if (changes.colorTheme !== undefined) {
    handleColorThemeChangeEvent(changes.colorTheme.newValue);
  }
  if (changes.numberDisplayFormat !== undefined) {
    handleNumberDisplayFormatChangeEvent(changes.numberDisplayFormat.newValue);
  }
  if (changes.numberDisplayReformatLikes !== undefined) {
    handleNumberDisplayReformatLikesChangeEvent(
      changes.numberDisplayReformatLikes.newValue,
    );
  }
}

function handleDisableVoteSubmissionChangeEvent(value) {
  _state__WEBPACK_IMPORTED_MODULE_2__/* .extConfig */ .az.disableVoteSubmission = value;
}

function handleColoredThumbsChangeEvent(value) {
  _state__WEBPACK_IMPORTED_MODULE_2__/* .extConfig */ .az.coloredThumbs = value;
}

function handleColoredBarChangeEvent(value) {
  _state__WEBPACK_IMPORTED_MODULE_2__/* .extConfig */ .az.coloredBar = value;
}

function handleColorThemeChangeEvent(value) {
  if (!value) value = "classic";
  _state__WEBPACK_IMPORTED_MODULE_2__/* .extConfig */ .az.colorTheme = value;
}

function handleNumberDisplayFormatChangeEvent(value) {
  _state__WEBPACK_IMPORTED_MODULE_2__/* .extConfig */ .az.numberDisplayFormat = value;
}

function handleNumberDisplayReformatLikesChangeEvent(value) {
  _state__WEBPACK_IMPORTED_MODULE_2__/* .extConfig */ .az.numberDisplayReformatLikes = value;
}




/***/ }),

/***/ 974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ee: () => (/* binding */ isShorts),
/* harmony export */   FH: () => (/* binding */ getLikeCountFromButton),
/* harmony export */   Fr: () => (/* binding */ isMobile),
/* harmony export */   KP: () => (/* binding */ storedData),
/* harmony export */   TM: () => (/* binding */ isNewDesign),
/* harmony export */   WM: () => (/* binding */ LIKED_STATE),
/* harmony export */   az: () => (/* binding */ extConfig),
/* harmony export */   cO: () => (/* binding */ NEUTRAL_STATE),
/* harmony export */   d3: () => (/* binding */ isLikesDisabled),
/* harmony export */   m$: () => (/* binding */ setInitialState),
/* harmony export */   q8: () => (/* binding */ initExtConfig),
/* harmony export */   rA: () => (/* binding */ setDislikes),
/* harmony export */   w_: () => (/* binding */ DISLIKED_STATE),
/* harmony export */   wv: () => (/* binding */ isRoundedDesign),
/* harmony export */   xo: () => (/* binding */ setLikes)
/* harmony export */ });
/* unused harmony exports isVideoDisliked, isVideoLiked, getState, setState */
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(582);
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(246);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(326);




//TODO: Do not duplicate here and in ryd.background.js
const apiUrl = "https://returnyoutubedislikeapi.com";
const LIKED_STATE = "LIKED_STATE";
const DISLIKED_STATE = "DISLIKED_STATE";
const NEUTRAL_STATE = "NEUTRAL_STATE";

let extConfig = {
	disableVoteSubmission: false,
	disableLogging: false,
	coloredThumbs: false,
	coloredBar: false,
	colorTheme: "classic",
	numberDisplayFormat: "compactShort",
	showTooltipPercentage: false,
	tooltipPercentageMode: "dash_like",
	numberDisplayReformatLikes: false,
	selectors: {
		dislikeTextContainer: [],
		likeTextContainer: [],
		buttons: {
			shorts: {
				mobile: [],
				desktop: [],
			},
			regular: {
				mobile: [],
				desktopMenu: [],
				desktopNoMenu: [],
			},
			likeButton: {
				segmented: [],
				segmentedGetButtons: [],
				notSegmented: [],
			},
			dislikeButton: {
				segmented: [],
				segmentedGetButtons: [],
				notSegmented: [],
			},
		},
		menuContainer: [],
		roundedDesign: [],
	},
};

let storedData = {
	likes: 0,
	dislikes: 0,
	previousState: NEUTRAL_STATE,
	rawLikes: 0,
};

function isMobile()
{
	return location.hostname == "m.youtube.com";
}

function isShorts()
{
	return location.pathname.startsWith( "/shorts" );
}

function isNewDesign()
{
	return document.getElementById( "comment-teaser" ) !== null;
}

function isRoundedDesign()
{
	return (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .querySelector */ .iT)( extConfig.selectors.roundedDesign ) !== null;
}

let shortsObserver = null;

if ( isShorts() && !shortsObserver )
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)( "Initializing shorts mutation observer" );
	shortsObserver = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createObserver */ .rc)(
		{
			attributes: true,
		},
		( mutationList ) =>
		{
			mutationList.forEach( ( mutation ) =>
			{
				if (
					mutation.type === "attributes" &&
					mutation.target.nodeName === "TP-YT-PAPER-BUTTON" &&
					mutation.target.id === "button"
				)
				{
					// cLog('Short thumb button status changed');
					if ( mutation.target.getAttribute( "aria-pressed" ) === "true" )
					{
						mutation.target.style.color =
							mutation.target.parentElement.parentElement.id === "like-button"
								? (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)( true )
								: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)( false );
					} else
					{
						mutation.target.style.color = "unset";
					}
					return;
				}
				(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)( "Unexpected mutation observer event: " + mutation.target + mutation.type );
			} );
		},
	);
}

function isLikesDisabled()
{
	// return true if the like button's text doesn't contain any number
	if ( isMobile() )
	{
		return /^\D*$/.test( (0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getButtons */ .Y7)().children[0].querySelector( ".button-renderer-text" ).innerText );
	}
	return /^\D*$/.test( (0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeTextContainer */ .uH)().innerText );
}

function isVideoLiked()
{
	if ( isMobile() )
	{
		return (0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeButton */ .UZ)().querySelector( "button" ).getAttribute( "aria-label" ) === "true";
	}
	return (
		(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeButton */ .UZ)().classList.contains( "style-default-active" ) ||
		(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeButton */ .UZ)().querySelector( "button" )?.getAttribute( "aria-pressed" ) === "true"
	);
}

function isVideoDisliked()
{
	if ( isMobile() )
	{
		return (0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeButton */ .aj)().querySelector( "button" ).getAttribute( "aria-label" ) === "true";
	}
	return (
		(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeButton */ .aj)().classList.contains( "style-default-active" ) ||
		(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeButton */ .aj)().querySelector( "button" )?.getAttribute( "aria-pressed" ) === "true"
	);
}

function getState( storedData )
{
	if ( isVideoLiked() )
	{
		return { current: LIKED_STATE, previous: storedData.previousState };
	}
	if ( isVideoDisliked() )
	{
		return { current: DISLIKED_STATE, previous: storedData.previousState };
	}
	return { current: NEUTRAL_STATE, previous: storedData.previousState };
}

//---   Sets The Likes And Dislikes Values   ---//
function setLikes( likesCount )
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)( `SET likes ${likesCount}` );
	(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeTextContainer */ .uH)().innerText = likesCount;
}

function setDislikes( dislikesCount )
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)( `SET dislikes ${dislikesCount}` );
	(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeTextContainer */ .u8)()?.removeAttribute( "is-empty" );
	if ( !isLikesDisabled() )
	{
		if ( isMobile() )
		{
			(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getButtons */ .Y7)().children[1].querySelector( ".button-renderer-text" ).innerText = dislikesCount;
			return;
		}
		(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeTextContainer */ .u8)().innerText = dislikesCount;
	} else
	{
		(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)( "likes count disabled by creator" );
		if ( isMobile() )
		{
			(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getButtons */ .Y7)().children[1].querySelector( ".button-renderer-text" ).innerText = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .kg)( "TextLikesDisabled" );
			return;
		}
		(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeTextContainer */ .u8)().innerText = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .kg)( "TextLikesDisabled" );
	}
}

function getLikeCountFromButton()
{
	try
	{
		if ( isShorts() )
		{
			//Youtube Shorts don't work with this query. It's not necessary; we can skip it and still see the results.
			//It should be possible to fix this function, but it's not critical to showing the dislike count.
			return false;
		}

		let likeButton =
			(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeButton */ .UZ)().querySelector( "yt-formatted-string#text" ) ?? (0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeButton */ .UZ)().querySelector( "button" );

		let likesStr = likeButton.getAttribute( "aria-label" ).replace( /\D/g, "" );
		return likesStr.length > 0 ? parseInt( likesStr ) : false;
	} catch {
		return false;
	}
}

function processResponse( response, storedData )
{
	const formattedDislike = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .numberFormat */ .jq)( response.rawDislikes );
	setDislikes( formattedDislike );
	if ( extConfig.numberDisplayReformatLikes === true )
	{
		const nativeLikes = getLikeCountFromButton();
		if ( nativeLikes !== false )
		{
			setLikes( (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .numberFormat */ .jq)( nativeLikes ) );
		}
	}
	storedData.dislikes = parseInt( response.rawDislikes );
	storedData.likes = parseInt( response.likes );
	storedData.rawLikes = parseInt( response.rawLikes);
	console.log( response );
	(0,_bar__WEBPACK_IMPORTED_MODULE_1__/* .createRateBar */ .m)( storedData.likes,storedData.dislikes,storedData.rawLikes);
	if ( extConfig.coloredThumbs === true )
	{
		if ( isShorts() )
		{
			// for shorts, leave deactivated buttons in default color
			let shortLikeButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeButton */ .UZ)().querySelector( "tp-yt-paper-button#button" );
			let shortDislikeButton = (0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeButton */ .aj)().querySelector( "tp-yt-paper-button#button" );
			if ( shortLikeButton.getAttribute( "aria-pressed" ) === "true" )
			{
				shortLikeButton.style.color = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)( true );
			}
			if ( shortDislikeButton.getAttribute( "aria-pressed" ) === "true" )
			{
				shortDislikeButton.style.color = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)( false );
			}
			shortsObserver.observe( shortLikeButton );
			shortsObserver.observe( shortDislikeButton );
		} else
		{
			(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getLikeButton */ .UZ)().style.color = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)( true );
			(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeButton */ .aj)().style.color = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getColorFromTheme */ .dH)( false );
		}
	}
	//Temporary disabling this - it breaks all places where getButtons()[1] is used
	// createStarRating(response.rating, isMobile());
}

// Tells the user if the API is down
function displayError( error )
{
	(0,_buttons__WEBPACK_IMPORTED_MODULE_0__/* .getDislikeTextContainer */ .u8)().innerText = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .kg)( "textTempUnavailable" );
}

async function setState( storedData )
{
	storedData.previousState = isVideoDisliked() ? DISLIKED_STATE : isVideoLiked() ? LIKED_STATE : NEUTRAL_STATE;
	let statsSet = false;
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)( "Video is loaded. Adding buttons..." );

	let videoId = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getVideoId */ .jI)( window.location.href );
	let likeCount = getLikeCountFromButton() || null;

	let response = await fetch( `${apiUrl}/votes?videoId=${videoId}&likeCount=${likeCount || ""}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	} )
		.then( ( response ) =>
		{
			if ( !response.ok ) displayError( response.error );
			return response;
		} )
		.then( ( response ) => response.json() )
		.catch( displayError );
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)( "response from api:" );
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .cLog */ .cX)( JSON.stringify( response ) );
	if ( response !== undefined && !( "traceId" in response ) && !statsSet )
	{
		processResponse( response, storedData );
	}
}

async function setInitialState()
{
	await setState( storedData );
}

async function initExtConfig()
{
	initializeDisableVoteSubmission();
	initializeDisableLogging();
	initializeColoredThumbs();
	initializeColoredBar();
	initializeColorTheme();
	initializeNumberDisplayFormat();
	initializeTooltipPercentage();
	initializeTooltipPercentageMode();
	initializeNumberDisplayReformatLikes();
	await initializeSelectors();
}

async function initializeSelectors()
{
	console.log( "initializing selectors" );
	let result = await fetch( `${apiUrl}/configs/selectors`, {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	} )
		.then( ( response ) => response.json() )
		.catch( ( error ) => { } );
	extConfig.selectors = result ?? extConfig.selectors;
	console.log( result );
}

function initializeDisableVoteSubmission()
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.get( ["disableVoteSubmission"], ( res ) =>
	{
		if ( res.disableVoteSubmission === undefined )
		{
			(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.set( { disableVoteSubmission: false } );
		} else
		{
			extConfig.disableVoteSubmission = res.disableVoteSubmission;
		}
	} );
}

function initializeDisableLogging()
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.get( ["disableLogging"], ( res ) =>
	{
		if ( res.disableLogging === undefined )
		{
			(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.set( { disableLogging: true } );
		} else
		{
			extConfig.disableLogging = res.disableLogging;
		}
	} );
}

function initializeColoredThumbs()
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.get( ["coloredThumbs"], ( res ) =>
	{
		if ( res.coloredThumbs === undefined )
		{
			(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.set( { coloredThumbs: false } );
		} else
		{
			extConfig.coloredThumbs = res.coloredThumbs;
		}
	} );
}

function initializeColoredBar()
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.get( ["coloredBar"], ( res ) =>
	{
		if ( res.coloredBar === undefined )
		{
			(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.set( { coloredBar: false } );
		} else
		{
			extConfig.coloredBar = res.coloredBar;
		}
	} );
}

function initializeColorTheme()
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.get( ["colorTheme"], ( res ) =>
	{
		if ( res.colorTheme === undefined )
		{
			(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.set( { colorTheme: false } );
		} else
		{
			extConfig.colorTheme = res.colorTheme;
		}
	} );
}

function initializeNumberDisplayFormat()
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.get( ["numberDisplayFormat"], ( res ) =>
	{
		if ( res.numberDisplayFormat === undefined )
		{
			(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.set( { numberDisplayFormat: "compactShort" } );
		} else
		{
			extConfig.numberDisplayFormat = res.numberDisplayFormat;
		}
	} );
}

function initializeTooltipPercentage()
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.get( ["showTooltipPercentage"], ( res ) =>
	{
		if ( res.showTooltipPercentage === undefined )
		{
			(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.set( { showTooltipPercentage: false } );
		} else
		{
			extConfig.showTooltipPercentage = res.showTooltipPercentage;
		}
	} );
}

function initializeTooltipPercentageMode()
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.get( ["tooltipPercentageMode"], ( res ) =>
	{
		if ( res.tooltipPercentageMode === undefined )
		{
			(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.set( { tooltipPercentageMode: "dash_like" } );
		} else
		{
			extConfig.tooltipPercentageMode = res.tooltipPercentageMode;
		}
	} );
}

function initializeNumberDisplayReformatLikes()
{
	(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.get( ["numberDisplayReformatLikes"], ( res ) =>
	{
		if ( res.numberDisplayReformatLikes === undefined )
		{
			(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getBrowser */ .X5)().storage.sync.set( { numberDisplayReformatLikes: false } );
		} else
		{
			extConfig.numberDisplayReformatLikes = res.numberDisplayReformatLikes;
		}
	} );
}




/***/ }),

/***/ 326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Re: () => (/* binding */ isVideoLoaded),
/* harmony export */   X5: () => (/* binding */ getBrowser),
/* harmony export */   cH: () => (/* binding */ isInViewport),
/* harmony export */   cX: () => (/* binding */ cLog),
/* harmony export */   dH: () => (/* binding */ getColorFromTheme),
/* harmony export */   iT: () => (/* binding */ querySelector),
/* harmony export */   jI: () => (/* binding */ getVideoId),
/* harmony export */   jq: () => (/* binding */ numberFormat),
/* harmony export */   kg: () => (/* binding */ localize),
/* harmony export */   rc: () => (/* binding */ createObserver),
/* harmony export */   vP: () => (/* binding */ querySelectorAll)
/* harmony export */ });
/* unused harmony export getNumberFormatter */
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(974);


function numberFormat(numberState) {
  return getNumberFormatter(_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.numberDisplayFormat).format(numberState);
}

function getNumberFormatter(optionSelect) {
  let userLocales;
  if (document.documentElement.lang) {
    userLocales = document.documentElement.lang;
  } else if (navigator.language) {
    userLocales = navigator.language;
  } else {
    try {
      userLocales = new URL(
        Array.from(document.querySelectorAll("head > link[rel='search']"))
          ?.find((n) => n?.getAttribute("href")?.includes("?locale="))
          ?.getAttribute("href"),
      )?.searchParams?.get("locale");
    } catch {
      cLog("Cannot find browser locale. Use en as default for number formatting.");
      userLocales = "en";
    }
  }

  let formatterNotation;
  let formatterCompactDisplay;
  switch (optionSelect) {
    case "compactLong":
      formatterNotation = "compact";
      formatterCompactDisplay = "long";
      break;
    case "standard":
      formatterNotation = "standard";
      formatterCompactDisplay = "short";
      break;
    case "compactShort":
    default:
      formatterNotation = "compact";
      formatterCompactDisplay = "short";
  }

  const formatter = Intl.NumberFormat(userLocales, {
    notation: formatterNotation,
    compactDisplay: formatterCompactDisplay,
  });
  return formatter;
}

function localize(localeString) {
  return chrome.i18n.getMessage(localeString);
}

function getBrowser() {
  if (typeof chrome !== "undefined" && typeof chrome.runtime !== "undefined") {
    return chrome;
  } else if (typeof browser !== "undefined" && typeof browser.runtime !== "undefined") {
    return browser;
  } else {
    console.log("browser is not supported");
    return false;
  }
}

function getVideoId(url) {
  const urlObject = new URL(url);
  const pathname = urlObject.pathname;
  if (pathname.startsWith("/clip")) {
    return (document.querySelector("meta[itemprop='videoId']") || document.querySelector("meta[itemprop='identifier']"))
      .content;
  } else {
    if (pathname.startsWith("/shorts")) {
      return pathname.slice(8);
    }
    return urlObject.searchParams.get("v");
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const height = innerHeight || document.documentElement.clientHeight;
  const width = innerWidth || document.documentElement.clientWidth;
  return (
    // When short (channel) is ignored, the element (like/dislike AND short itself) is
    // hidden with a 0 DOMRect. In this case, consider it outside of Viewport
    !(rect.top == 0 && rect.left == 0 && rect.bottom == 0 && rect.right == 0) &&
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= height &&
    rect.right <= width
  );
}

function isVideoLoaded() {
  const videoId = getVideoId(window.location.href);
  return (
    // desktop: spring 2024 UI
    document.querySelector(`ytd-watch-grid[video-id='${videoId}']`) !== null ||
    // desktop: older UI
    document.querySelector(`ytd-watch-flexy[video-id='${videoId}']`) !== null ||
    // mobile: no video-id attribute
    document.querySelector('#player[loading="false"]:not([hidden])') !== null
  );
}

function cLog(message, writer) {
  if (!_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.disableLogging) {
    message = `[return youtube dislike]: ${message}`;
    if (writer) {
      writer(message);
    } else {
      console.log(message);
    }
  }
}

function getColorFromTheme(voteIsLike) {
  let colorString;
  switch (_state__WEBPACK_IMPORTED_MODULE_0__/* .extConfig */ .az.colorTheme) {
    case "accessible":
      if (voteIsLike === true) {
        colorString = "dodgerblue";
      } else {
        colorString = "gold";
      }
      break;
    case "neon":
      if (voteIsLike === true) {
        colorString = "aqua";
      } else {
        colorString = "magenta";
      }
      break;
    case "classic":
    default:
      if (voteIsLike === true) {
        colorString = "lime";
      } else {
        colorString = "red";
      }
  }
  return colorString;
}

function querySelector(selectors, element) {
  let result;
  for (const selector of selectors) {
    result = (element ?? document).querySelector(selector);
    if (result !== null) {
      return result;
    }
  }
}

function querySelectorAll(selectors) {
  let result;
  for (const selector of selectors) {
    result = document.querySelectorAll(selector);
    if (result.length !== 0) {
      return result;
    }
  }
  return result;
}

function createObserver(options, callback) {
  const observerWrapper = new Object();
  observerWrapper.options = options;
  observerWrapper.observer = new MutationObserver(callback);
  observerWrapper.observe = function (element) {
    this.observer.observe(element, this.options);
  };
  observerWrapper.disconnect = function () {
    this.observer.disconnect();
  };
  return observerWrapper;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(632);
/******/ 	
/******/ })()
;
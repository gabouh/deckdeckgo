/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DeckgoDeck {
    'doPrint': () => Promise<void>;
    'getActiveIndex': () => Promise<number>;
    'getLength': () => Promise<number>;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'keyboard': boolean;
    'pager': boolean;
    'pagerPercentage': boolean;
    'slideNext': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slidePrev': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slideTo': (index: number, speed?: number, emitEvent?: boolean) => Promise<void>;
    'toggleFullScreen': () => Promise<void>;
  }
  interface DeckgoDeckAttributes extends StencilHTMLAttributes {
    'keyboard'?: boolean;
    'onSlideDrag'?: (event: CustomEvent<number>) => void;
    'onSlideNextDidChange'?: (event: CustomEvent<number>) => void;
    'onSlidePrevDidChange'?: (event: CustomEvent<number>) => void;
    'onSlideToChange'?: (event: CustomEvent<number>) => void;
    'onSlideWillChange'?: (event: CustomEvent<number>) => void;
    'pager'?: boolean;
    'pagerPercentage'?: boolean;
  }

  interface DeckgoGif {
    'alt': string;
    'fullscreen': boolean;
    'src': string;
  }
  interface DeckgoGifAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'fullscreen'?: boolean;
    'src'?: string;
  }

  interface DeckgoSocial {
    'fullUrl': string;
    'github': string;
    'linkedin': string;
    'medium': string;
    'twitter': string;
  }
  interface DeckgoSocialAttributes extends StencilHTMLAttributes {
    'fullUrl'?: string;
    'github'?: string;
    'linkedin'?: string;
    'medium'?: string;
    'twitter'?: string;
  }

  interface DeckgoYoutube {
    'height': number;
    'src': string;
    'updateIFrame': (width: number, height: number) => Promise<void>;
    'width': number;
  }
  interface DeckgoYoutubeAttributes extends StencilHTMLAttributes {
    'height'?: number;
    'src'?: string;
    'width'?: number;
  }

  interface DeckgoPager {
    'activeIndex': number;
    'length': number;
    'percentage': boolean;
  }
  interface DeckgoPagerAttributes extends StencilHTMLAttributes {
    'activeIndex'?: number;
    'length'?: number;
    'percentage'?: boolean;
  }

  interface DeckgoSlideAuthor {
    'beforeSwipe': (_swipeLeft: boolean) => Promise<boolean>;
    'imgUrl': string;
    'lazyLoadImages': () => Promise<void>;
  }
  interface DeckgoSlideAuthorAttributes extends StencilHTMLAttributes {
    'imgUrl'?: string;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
  }

  interface DeckgoSlideCode {
    'anchor': string;
    'anchorZoom': string;
    'beforeSwipe': (_swipeLeft: boolean) => Promise<boolean>;
    'hideAnchor': boolean;
    'language': string;
    'lazyLoadImages': () => Promise<void>;
    'src': string;
  }
  interface DeckgoSlideCodeAttributes extends StencilHTMLAttributes {
    'anchor'?: string;
    'anchorZoom'?: string;
    'hideAnchor'?: boolean;
    'language'?: string;
    'onScrolling'?: (event: CustomEvent<void>) => void;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'src'?: string;
  }

  interface DeckgoSlideContent {
    'beforeSwipe': (_swipeLeft: boolean) => Promise<boolean>;
    'lazyLoadImages': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideContentAttributes extends StencilHTMLAttributes {
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }

  interface DeckgoSlideSplit {
    'beforeSwipe': (_swipeLeft: boolean) => Promise<boolean>;
    'lazyLoadImages': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideSplitAttributes extends StencilHTMLAttributes {
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }

  interface DeckgoSlideTitle {
    'beforeSwipe': (_swipeLeft: boolean) => Promise<boolean>;
    'lazyLoadImages': () => Promise<void>;
    'reveal': boolean;
    'revealShowFirst': boolean;
  }
  interface DeckgoSlideTitleAttributes extends StencilHTMLAttributes {
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'reveal'?: boolean;
    'revealShowFirst'?: boolean;
  }

  interface DeckgoSlideYoutube {
    'beforeSwipe': (_swipeLeft: boolean) => Promise<boolean>;
    'fullSize': boolean;
    'height': number;
    'lazyLoadImages': () => Promise<void>;
    'src': string;
    'width': number;
  }
  interface DeckgoSlideYoutubeAttributes extends StencilHTMLAttributes {
    'fullSize'?: boolean;
    'height'?: number;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'src'?: string;
    'width'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DeckgoDeck': Components.DeckgoDeck;
    'DeckgoGif': Components.DeckgoGif;
    'DeckgoSocial': Components.DeckgoSocial;
    'DeckgoYoutube': Components.DeckgoYoutube;
    'DeckgoPager': Components.DeckgoPager;
    'DeckgoSlideAuthor': Components.DeckgoSlideAuthor;
    'DeckgoSlideCode': Components.DeckgoSlideCode;
    'DeckgoSlideContent': Components.DeckgoSlideContent;
    'DeckgoSlideSplit': Components.DeckgoSlideSplit;
    'DeckgoSlideTitle': Components.DeckgoSlideTitle;
    'DeckgoSlideYoutube': Components.DeckgoSlideYoutube;
  }

  interface StencilIntrinsicElements {
    'deckgo-deck': Components.DeckgoDeckAttributes;
    'deckgo-gif': Components.DeckgoGifAttributes;
    'deckgo-social': Components.DeckgoSocialAttributes;
    'deckgo-youtube': Components.DeckgoYoutubeAttributes;
    'deckgo-pager': Components.DeckgoPagerAttributes;
    'deckgo-slide-author': Components.DeckgoSlideAuthorAttributes;
    'deckgo-slide-code': Components.DeckgoSlideCodeAttributes;
    'deckgo-slide-content': Components.DeckgoSlideContentAttributes;
    'deckgo-slide-split': Components.DeckgoSlideSplitAttributes;
    'deckgo-slide-title': Components.DeckgoSlideTitleAttributes;
    'deckgo-slide-youtube': Components.DeckgoSlideYoutubeAttributes;
  }


  interface HTMLDeckgoDeckElement extends Components.DeckgoDeck, HTMLStencilElement {}
  var HTMLDeckgoDeckElement: {
    prototype: HTMLDeckgoDeckElement;
    new (): HTMLDeckgoDeckElement;
  };

  interface HTMLDeckgoGifElement extends Components.DeckgoGif, HTMLStencilElement {}
  var HTMLDeckgoGifElement: {
    prototype: HTMLDeckgoGifElement;
    new (): HTMLDeckgoGifElement;
  };

  interface HTMLDeckgoSocialElement extends Components.DeckgoSocial, HTMLStencilElement {}
  var HTMLDeckgoSocialElement: {
    prototype: HTMLDeckgoSocialElement;
    new (): HTMLDeckgoSocialElement;
  };

  interface HTMLDeckgoYoutubeElement extends Components.DeckgoYoutube, HTMLStencilElement {}
  var HTMLDeckgoYoutubeElement: {
    prototype: HTMLDeckgoYoutubeElement;
    new (): HTMLDeckgoYoutubeElement;
  };

  interface HTMLDeckgoPagerElement extends Components.DeckgoPager, HTMLStencilElement {}
  var HTMLDeckgoPagerElement: {
    prototype: HTMLDeckgoPagerElement;
    new (): HTMLDeckgoPagerElement;
  };

  interface HTMLDeckgoSlideAuthorElement extends Components.DeckgoSlideAuthor, HTMLStencilElement {}
  var HTMLDeckgoSlideAuthorElement: {
    prototype: HTMLDeckgoSlideAuthorElement;
    new (): HTMLDeckgoSlideAuthorElement;
  };

  interface HTMLDeckgoSlideCodeElement extends Components.DeckgoSlideCode, HTMLStencilElement {}
  var HTMLDeckgoSlideCodeElement: {
    prototype: HTMLDeckgoSlideCodeElement;
    new (): HTMLDeckgoSlideCodeElement;
  };

  interface HTMLDeckgoSlideContentElement extends Components.DeckgoSlideContent, HTMLStencilElement {}
  var HTMLDeckgoSlideContentElement: {
    prototype: HTMLDeckgoSlideContentElement;
    new (): HTMLDeckgoSlideContentElement;
  };

  interface HTMLDeckgoSlideSplitElement extends Components.DeckgoSlideSplit, HTMLStencilElement {}
  var HTMLDeckgoSlideSplitElement: {
    prototype: HTMLDeckgoSlideSplitElement;
    new (): HTMLDeckgoSlideSplitElement;
  };

  interface HTMLDeckgoSlideTitleElement extends Components.DeckgoSlideTitle, HTMLStencilElement {}
  var HTMLDeckgoSlideTitleElement: {
    prototype: HTMLDeckgoSlideTitleElement;
    new (): HTMLDeckgoSlideTitleElement;
  };

  interface HTMLDeckgoSlideYoutubeElement extends Components.DeckgoSlideYoutube, HTMLStencilElement {}
  var HTMLDeckgoSlideYoutubeElement: {
    prototype: HTMLDeckgoSlideYoutubeElement;
    new (): HTMLDeckgoSlideYoutubeElement;
  };

  interface HTMLElementTagNameMap {
    'deckgo-deck': HTMLDeckgoDeckElement
    'deckgo-gif': HTMLDeckgoGifElement
    'deckgo-social': HTMLDeckgoSocialElement
    'deckgo-youtube': HTMLDeckgoYoutubeElement
    'deckgo-pager': HTMLDeckgoPagerElement
    'deckgo-slide-author': HTMLDeckgoSlideAuthorElement
    'deckgo-slide-code': HTMLDeckgoSlideCodeElement
    'deckgo-slide-content': HTMLDeckgoSlideContentElement
    'deckgo-slide-split': HTMLDeckgoSlideSplitElement
    'deckgo-slide-title': HTMLDeckgoSlideTitleElement
    'deckgo-slide-youtube': HTMLDeckgoSlideYoutubeElement
  }

  interface ElementTagNameMap {
    'deckgo-deck': HTMLDeckgoDeckElement;
    'deckgo-gif': HTMLDeckgoGifElement;
    'deckgo-social': HTMLDeckgoSocialElement;
    'deckgo-youtube': HTMLDeckgoYoutubeElement;
    'deckgo-pager': HTMLDeckgoPagerElement;
    'deckgo-slide-author': HTMLDeckgoSlideAuthorElement;
    'deckgo-slide-code': HTMLDeckgoSlideCodeElement;
    'deckgo-slide-content': HTMLDeckgoSlideContentElement;
    'deckgo-slide-split': HTMLDeckgoSlideSplitElement;
    'deckgo-slide-title': HTMLDeckgoSlideTitleElement;
    'deckgo-slide-youtube': HTMLDeckgoSlideYoutubeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}

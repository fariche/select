$.mbBgndGallery.buildGallery({

  // The selector of the element where the gallery will be inserted
  containment:"body", 

  // the value in millisecond for the display duration
  timer:2000, 

  // the value in millisecond for the transaction duration
  effTimer:6000, 

  // The selector of the element where the controls are placed
  controls:"#controls", 

  // define if the gallery should be displayed black and white (works only for same domain images)
  grayScale:false, 

  // define if the gallery images should be shuffle before the gallery start
  shuffle:true, 

  preserveTop: false,
  preserveWidth:false,

  // You can use one of the preset effects to define how images will enter and exit from the gallery, or you can define the behavior your own using an Object containing the CSS property for the “enter” step and for the “exit” step.
  // 'fade', 'slideUp', 'slideDown', 'slideRight', 'slideLeft', 'zoom'
  effect:"zoom",

  filter: null,

  // he path to the raster image, if the gallery has a raster overlay smaller images are better displayed //“inc/raster.png”
  raster: false,

  // the path to the thumbnails folder
  folderPath: false,

  // define if the gallery should start once initialized
  autoStart: true,

  // define if the gallery should be displayed black and white (works only for same domain images)
  grayScale: false,

  // define if the gallery should be navigable via keyboard
  activateKeyboard: true,

  // the id of the DOM element where the thumbnails should be placed
  placeHolder: "Gallery_wrapper",

  // an array of images
  images:[
    "imgs/background/cajon pass canyon.jpg",
    "imgs/background/san diego track level.jpg",
    "imgs/background/snowshed 100 percent scratchbuilt 2.jpg"
  ],

  //Path to the folder containing the thumbnails and ID of the DOM element that should contains them.
  // <a href="http://www.jqueryscript.net/tags.php?/Thumbnail/">Thumbnail</a> should have the same name of the corresponding image
  thumbs: {
    folderPath: "imgs/background/",
    placeholder: "Gallery_wrapper"
  },

  // Callbacks:
  onStart:function(){},
  onPause:function(){},
  onPlay:function(opt){},
  onChange:function(opt,idx){},
  onNext:function(opt){},
  onPrev:function(opt){}

});
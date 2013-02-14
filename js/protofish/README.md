# ProtoFish: hover menu based on Prototype

**Warning**: ProtoFish is an old experiment (2009), tightly coupled to Prototype JS and probably not the most beautiful code. However, it still works; use with care :)

ProtoFish is an advanced hover menu based on Prototype. You can easily add a delay to your menu (on mouseout) and choose your own hover class. All ProtoFish menu's are keyboard accessible conform ARIA best practices. It's fully customizable and free to use.

ProtoFish is featured on [Ajaxian](http://ajaxian.com/archives/protofish-advanced-hover-menu) and [Scripteka](http://scripteka.com/script/protofish-advanced-hover-menu-delay-custom-class).

## Features
* Lightweight: 5.2kB.
* Unobtrusive: fallback to a standard CSS hover menu.
* Cross-browser: IE6+, Safari 3+, Opera 9+, Chrome, Firefox 2+.
* Fully customizable.
* Accessible for keyboard navigating users (ARIA support can be turned on).
* Multiple instances per page are possible.
* Unlimited sublevels.

## Usage
### Download ProtoFish
Download the latest version of ProtoFish and include it in your page.

    <script type="text/javascript" src="js/prototype.js"></script>
    <script type="text/javascript" src="js/protofish.js"></script>

### Initialize your menu
Initialize your ProtoFish menu with the following code:

    <script type='text/javascript'>
      document.observe('dom:loaded', function() {
        new ProtoFish('menu-1', '200', 'hover', false, true, true);
      });
    </script>

The Class takes the following parameters:
1. Menu ID (string)
2. Delay (string)
3. Hovering classname (string)
4. Removal of .active classnames on hovering (boolean)
5. Whether or not the menu should enable ARIA roles and states (boolean)
6. Whether or not the menu should use a shortkey (ctrl+alt+m) to access the menu (boolean)

### Edit your CSS
Edit your CSS to support show & hide behavior based on the hover class you defined.

## Why ProtoFish?
Most people know the parent of all hover menu's: the SuckerFish dropdown menu published by A List Apart in 2003. Obviously, the name ProtoFish is a combination of the Prototype JS framework and the SuckerFish technique published by A List Apart. There are many enhanced versions of the SuckerFish dropdown around on the web, but none of them met the following, to me important, criteria:

1. The script should be based on Prototype,
2. The script should be lightweight and
3. The script should be easy to implement.

## The MIT License (MIT)
You're allowed to use ProtoFish without any constraints. Rip the code apart or add some features - use it the way you like!

Copyright (c) 2012 Peter Slagter

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
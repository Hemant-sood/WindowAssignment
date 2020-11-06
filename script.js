if (window.location.href.match('index.html')) {


    window.onload = function() {

        var message = "If you would like to get started as a front - end web developer, you are going to LOVE this documentation!";
        var msg1 = document.getElementById("msg1");
        var len1 = message.length;
        var i1 = 0;

        var interval = setInterval(() => {

            msg1.innerHTML = message.substr(0, i1);
            i1++;

            if (i1 > len1)
                clearInterval(interval);

        }, 100);



        var message2 = "Front - end web development, also known as client - side development is the practice of producing HTML, CSS and JavaScript  for a website or Web Application so that a user can see and interact with them directly.The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant.This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site.";
        var msg2 = document.getElementById("msg2");
        var len2 = message2.length;
        var i2 = 0

        var interval2 = setInterval(() => {

            msg2.innerHTML = message2.substr(0, i2);
            i2++;

            if (i2 > len2)
                clearInterval(interval2);

        }, 4);

    }


}

if (window.location.href.match('css.html')) {
    window.onload = function() {
        var message3 = "CSS is used to control the style of a web document in a simple and easy way.CSS is the acronym for 'Cascading Style Sheet '.This tutorial covers both the versions CSS1, CSS2 and CSS3, and gives a complete understanding of CSS, starting from its basics to advanced concepts.";
        var msg3 = document.getElementById("msg3");
        var len3 = message3.length;
        var i3 = 0;

        var interval3 = setInterval(() => {

            msg3.innerHTML = message3.substr(0, i3);
            i3++;

            if (i3 > len3)
                clearInterval(interval3);

        }, 4);


        var message4 = "Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable. <br/><br/> CSS is a MUSTfor students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain.I will list down some of the key advantages of learning CSS:Create Stunning Web site - CSS handles the look and feel part of a web page.Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs, variations in display for different devices and screen sizes as well as a variety of other effects. <br/><br/>Become a web designer - If you want to start a carrier as a professional web designer, HTML and CSS designing is a must skill. <br/><br/> Control web - CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document.Most commonly, CSS is combined with the markup languages HTML or XHTML.<br/> <br/> Learn other languages - Once you understands the basic of HTML and CSS then other related technologies like javascript, php, or angular are become easier to understand.";
        var msg4 = document.getElementById("msg4");
        var len4 = message4.length;
        var i4 = 0;

        var interval4 = setInterval(() => {

            msg4.innerHTML = message4.substr(0, i4);
            i4++;

            if (i4 > len4)
                clearInterval(interval4);

        }, 4);
    }
}

if (window.location.href.match('html.html')) {
    window.onload = function() {
        var message5 = "HTML stands for Hyper Text Markup Language, which is the most widely used language on Web to develop web pages.HTML was created by Berners - Lee in late 1991 but HTML 2.0 was the first standard HTML specification which was published in 1995. HTML 4.01 was a major version of HTML and it was published in late 1999. Though HTML 4.01 version is widely used but currently we are having HTML - 5 version which is an extension to HTML 4.01, and this version was published in 2012. ";
        var msg5 = document.getElementById("msg5");
        var len5 = message5.length;
        var i5 = 0;

        var interval5 = setInterval(() => {

            msg5.innerHTML = message5.substr(0, i5);
            i5++;

            if (i5 > len5)
                clearInterval(interval5);

        }, 4);


        var message6 = "Originally, HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers. Now, HTML is being widely used to format web pages with the help of different tags available in HTML language. HTML is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning HTML:";
        var msg6 = document.getElementById("msg6");
        var len6 = message6.length;
        var i6 = 0;

        var interval6 = setInterval(() => {

            msg6.innerHTML = message6.substr(0, i6);
            i6++;

            if (i6 > len6)
                clearInterval(interval6);

        }, 4);
    }
}


if (window.location.href.match('js.html')) {
    window.onload = function() {
        var message7 = "JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML.It is open and cross-platform.";
        var msg7 = document.getElementById("msg7");
        var len7 = message7.length;
        var i7 = 0;

        var interval7 = setInterval(() => {

            msg7.innerHTML = message7.substr(0, i7);
            i7++;

            if (i7 > len7)
                clearInterval(interval7);

        }, 4);


        var message8 = "Javascript is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain.I will list down some of the key advantages of learning Javascript:<br/><br/>Javascript is the most popular programming language in the world and that makes it a programmer’s great choice.Once you learnt Javascript, it helps you developing great front-end as well as back-end softwares using different Javascript based frameworks like jQuery, Node.JS etc.<br/><br/>Javascript is everywhere, it comes installed on every modern web browser and so to learn Javascript you really do not need any special environment setup. For example Chrome, Mozilla Firefox , Safari and every browser you know as of today, supports Javascript. javascript helps you create really beautiful and crazy fast websites. You can develop your website with a console like look and feel and give your users the best Graphical User Experience.<br/><br/>Javascript helps you create really beautiful and crazy fast websites. You can develop your website with a console like look and feel and give your users the best Graphical User Experience.<br/><br/> JavaScript usage has now extended to mobile app development, desktop app development, and game development. This opens many opportunities for you as Javascript Programmer.";
        var msg8 = document.getElementById("msg8");
        var len8 = message8.length;
        var i8 = 0;

        var interval8 = setInterval(() => {

            msg8.innerHTML = message8.substr(0, i8);
            i8++;

            if (i8 > len8)
                clearInterval(interval8);

        }, 4);
    }
}

function clickOnCss() {
    window.location.href = 'css.html';
}

function clickOnHtml() {
    window.location.href = 'html.html';
}

function clickOnJs() {
    window.location.href = 'js.html';
}

function goToHome() {
    window.location.href = 'index.html';
}
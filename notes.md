# HTML🩻

![alt text](example.png)

Hypertext Markup Language- defines the meaning and structure of web content

"Hypertext" refers to links that connect web pages to one another

"markup" to annotate text, images, and other content for display in a Web browser.

HTML consists of a series of **elements**, which you use to enclose.

## Anatomy of Html element

![Anatomy of HTML element](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png)

Attributes contain extra information about the element that you don't want to appear in the actual content.

You can put elements inside other elements too — this is called nesting.

## Void Elements

A void element is an element in HTML that cannot have any child nodes (i.e., nested elements or text nodes). Void elements only have a start tag; end tags must not be specified for void elements.

```$$

<area>
<base>
<br>
<col>
<embed>
<hr>
<img>
<input>
<link>
<meta>
<param>
<source>
<track>
<wbr>
```

[**Anatomy of a html doc**](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document)

## Images

```python
<img src="images/firefox-icon.png" alt="My test image" />
```

1.src (source) attribute, which contains the path to our image file.

2.alt (alternative) attribute specify descriptive text for users who cannot see the image, [SEO](https://searchengineland.com/guide/what-is-seo) purposes.

## Headings

HTML contains 6 heading levels, h1 to h6

```python
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

## Paragraphs

```python
<p>This is a single paragraph</p>
```

# Style HTML using CSS 😎

# CSS

## What is Cascading?

**Cascading Style Sheets** — or CSS. CSS is not a programming language, is a _style sheet language_.

**GOAL**-

## Types of CSS:

1. Inline CSS
2. internal or embedded CSS
3. External CSS

You can use CSS to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.

```python
p {
  color: red;
}

```

![alt text](image-6.png)

![alt text](image-7.png)

![Anatomy of a CSS ruleset](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png)

This whole structure is called as ruleset.

     1.Apart from the selector, each ruleset must be wrapped in curly braces. ({})

    2.Within each declaration, you must use a colon (:) to separate the property from its value or values.

    3.Within each ruleset, you must use a semicolon (;) to separate each declaration from the next one.

## [Different types of selectors](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#different_types_of_selectors)

Element selector (sometimes called a tag or type selector)- p
selects < p >

Class selector The element(s) on the page with the specified class. Multiple instances of the same class can appear on a page.

```python
.my-class
selects <p class="my-class"> and <a class="my-class">
```

## Text styling

1. font size
2. font weight- thickness of the text
3. font style- Italic
4. color

## Text styling - 2

1. text transform
2. text align
3. text - decoration
4. letter spacing
5. line height

CSS layout is mostly based on the box model. Each box taking up space on your page has properties like:

**padding**, the space around the content. shrink inside

**border**, the solid line that is just outside the padding.

**margin**, the space around the outside of the border.

[Positioning and styling the main page title](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#positioning_and_styling_the_main_page_title)

[Centering the image](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#centering_the_image)

![image](browser.png)

[Mdn cheatsheet](https://www.datacamp.com/cheat-sheet/markdown-cheat-sheet-23)

## Shortcuts

<!-- 1. windows + .  emojis -->
<!-- 2. ctrl+ / comment -->

ctrl+ , settings

Ctrl+ space , Autocomplete

ctrl+shift+p --- command palette

Ctrl+click ----

ctrl + ' ==> show/hide terminal

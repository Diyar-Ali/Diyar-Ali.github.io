# Content Tabs

## Overview

This document provides an overview of the content tabs used in our project.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Examples](#examples)
- [Conclusion](#conclusion)

## Introduction

Content tabs are a useful way to organize information in a compact and user-friendly manner. They allow users to switch between different sections of content without leaving the current page.

=== "Usage"

    To use content tabs in your project, follow these steps:

    1. Include the necessary CSS and JavaScript files.
    2. Create the HTML structure for the tabs.
    3. Add the content for each tab.
    4. Initialize the tabs using JavaScript.

=== "Examples"

=== "Basic Example"

    ```html
    <div class="tabs">
        <ul class="tab-list">
            <li class="tab active" data-tab="tab-1">Tab 1</li>
            <li class="tab" data-tab="tab-2">Tab 2</li>
            <li class="tab" data-tab="tab-3">Tab 3</li>
        </ul>
        <div class="tab-content active" id="tab-1">
            Content for Tab 1
        </div>
        <div class="tab-content" id="tab-2">
            Content for Tab 2
        </div>
        <div class="tab-content" id="tab-3">
            Content for Tab 3
        </div>
    </div>
    ```

=== "JavaScript Initialization"

    ```javascript
    document.addEventListener('DOMContentLoaded', function () {
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                tabs.forEach(item => item.classList.remove('active'));
                contents.forEach(item => item.classList.remove('active'));

                tab.classList.add('active');
                document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
            });
        });
    });
    ```

## Conclusion

Content tabs are a powerful tool for organizing information on a webpage. By following the steps outlined in this document, you can easily implement content tabs in your project.
## Additional Resources

For more information on content tabs, check out the following resources:

=== "HTML"
    ```html
    <div class="tabs">
        <ul class="tab-list">
            <li class="tab active" data-tab="tab-1">Tab 1</li>
            <li class="tab" data-tab="tab-2">Tab 2</li>
            <li class="tab" data-tab="tab-3">Tab 3</li>
        </ul>
        <div class="tab-content active" id="tab-1">
            Content for Tab 1
        </div>
        <div class="tab-content" id="tab-2">
            Content for Tab 2
        </div>
        <div class="tab-content" id="tab-3">
            Content for Tab 3
        </div>
    </div>
    ```

=== "CSS"
    ```css
    .tabs {
        display: flex;
        flex-direction: column;
    }
    .tab-list {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .tab {
        padding: 10px;
        cursor: pointer;
    }
    .tab.active {
        font-weight: bold;
    }
    .tab-content {
        display: none;
    }
    .tab-content.active {
        display: block;
    }
    ```

=== "JavaScript"
    ```javascript
    document.addEventListener('DOMContentLoaded', function () {
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                tabs.forEach(item => item.classList.remove('active'));
                contents.forEach(item => item.classList.remove('active'));

                tab.classList.add('active');
                document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
            });
        });
    });
    ```
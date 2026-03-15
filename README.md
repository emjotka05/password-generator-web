#Password Generator

> A robust, accessible, and responsive random password generator built with Vanilla JavaScript.

## Preview
(images/image.png)

## Live Demo
**[Click here to see the project live on GitHub Pages](https://emjotka05.github.io/password-generator-web/)**

## About The Project
This project is a highly interactive widget that allows users to instantly generate strong, 15-character passwords. It was built with a strong focus on **User Experience** and **Accessibility**, ensuring it works flawlessly for all users, across all devices.

## Key Features
* **Instant Generation:** Creates two secure, random 15-character passwords with a single click.
* **1-Click Copy:** Seamlessly copies passwords to the clipboard with temporary visual feedback "Copied to clipboard!".
* **Advanced Edit Mode:** Users can safely modify generated passwords directly in the UI.
* **Smart Input Validation:** Custom JavaScript keydown listeners strictly enforce a 15-character limit during editing without blocking essential keys like Backspace, Arrows, Ctrl+A.
* **Graceful Cancel (UX):** Clicking outside the editable area automatically discards unsaved changes and restores the original passwords.
* **Responsive Design:** 

## Accessibility
This project was built to meet high WCAG standards:
* **Live Announcers:** Uses `aria-live="polite"` to dynamically inform screen reader users about successful password generation, copy events, edit mode toggles, and max-length warnings.
* **Dynamic ARIA Labels:** `aria-label` attributes on buttons are updated on the fly depending on the current application state .

## Built With
* Semantic HTML5
* CSS3 
* Vanilla JavaScript
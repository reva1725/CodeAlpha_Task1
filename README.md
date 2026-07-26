# Responsive Image Gallery 

## 📌 Project Overview

This project is a **Responsive Image Gallery Website** developed using **HTML, CSS, and JavaScript**. It allows users to browse images organized into different categories, filter images by category, and view them in a full-screen lightbox with previous and next navigation.

The gallery is designed with a modern user interface and is fully responsive, making it suitable for desktop, tablet, and mobile devices.

---

## 🚀 Features

* Responsive image gallery layout using CSS Grid.
* Filter images by category.
* Full-screen lightbox view.
* Previous and Next image navigation.
* Hover animations and smooth transitions.
* Close lightbox by clicking the close icon or outside the image.
* Mobile-friendly responsive design.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📂 Project Structure

```
Image-Gallery/
│
├── index.html
├── style.css
├── script.js
├── planetimg1.jpg
├── planetimg2.jpg
├── ...
├── oceanimg1.jpg
├── ...
├── natureimg1.jpg
├── ...
├── birdsimg1.jpg
├── ...
└── README.md
```

---

## 📁 Image Categories

The gallery contains four categories:

* 🪐 Planet
* 🌊 Ocean
* 🌿 Nature
* 🐦 Bird

Each category can be viewed individually using the filter buttons.

---

## ⚙️ Functionality

### 1. Filter Images

Users can display images belonging to a selected category.

```
All
Planet
Ocean
Nature
Bird
```

---

### 2. Lightbox

Clicking any image opens it in a full-screen lightbox.

Features include:

* Enlarged image preview
* Previous button
* Next button
* Close button

---

### 3. Responsive Design

The gallery automatically adjusts its layout according to the screen size.

* Desktop
* Tablet
* Mobile

---

## 📖 Code Explanation

### HTML

The HTML file contains:

* Page heading
* Category filter buttons
* Gallery container
* Image cards
* Lightbox container

Each image belongs to a category using CSS classes such as:

```html
<div class="image planet">
    <img src="planetimg1.jpg" onclick="openLightbox(0)">
</div>
```

---

### CSS

The CSS provides:

* Gradient background
* Responsive grid layout
* Hover animations
* Lightbox styling
* Navigation button styling
* Mobile responsiveness using media queries

---

### JavaScript

The JavaScript handles:

* Opening the selected image
* Closing the lightbox
* Previous and Next navigation
* Category filtering
* Closing the lightbox when clicking outside the image

Main functions:

* `openLightbox(index)`
* `closeLightbox()`
* `changeImage(step)`
* `filterImages(category)`

---

## ▶️ How to Run the Project

1. Download or clone the repository.

2. Place all image files in the project folder.

3. Open `index.html` in any modern web browser.

No additional software or server is required.

---

## 📱 Browser Compatibility

This project works on:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Opera

---

## 🎯 Future Enhancements

* Search images by name
* Image captions
* Dark/Light mode
* Automatic slideshow
* Image download option
* Image upload feature
* Favorite images section
* Lazy loading for faster performance

---

## 👩‍💻 Author

**Revathi Priya**

Developed as a frontend web development project using HTML, CSS, and JavaScript.

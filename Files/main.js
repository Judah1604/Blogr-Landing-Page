let dropDownMenus = document.getElementsByClassName('dropdown-menu'),
	navItems = document.getElementsByClassName('nav-item'),
	nav = document.querySelector('.nav'),
	navCol2 = document.querySelector('.col2'),
	navMenu = document.querySelector('.nav-menu'),
	toggle = document.querySelector('.toggle'),
	editorImg = document.querySelector('.editorImg'),
	featuresImg = document.querySelector('.features-other img'),
	menuItems = document.getElementsByClassName('menu-item')

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener('mouseover', function () {
		navItems[i].children[2].classList.add('show')
	})
	navItems[i].addEventListener('mouseout', function () {
		navItems[i].children[2].classList.remove('show')
	})
}

for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', function () {
		menuItems[i].children[0].classList.toggle('selected')
		menuItems[i].children[1].classList.toggle('icon-selected')
		menuItems[i].children[2].classList.toggle('active')
	})
}

for (let i = 0; i < dropDownMenus.length; i++) {
	dropDownMenus[i].addEventListener('mouseover', function () {
		dropDownMenus[i].classList.add('show')
	})
	dropDownMenus[i].addEventListener('mouseout', function () {
		dropDownMenus[i].classList.remove('show')
	})
}

document.addEventListener('DOMContentLoaded', makeContentResponsive)
window.addEventListener('resize', makeContentResponsive)

function makeContentResponsive () {
	if (window.innerWidth <= 375) {
		toggle.style.display = 'flex'
		navCol2.style.display = 'none'
		nav.style.display = 'none'
		editorImg.setAttribute('src', 'images/illustration-editor-mobile.svg')
		featuresImg.setAttribute('src', 'images/illustration-laptop-mobile.svg')
	} else if (window.innerWidth > 375) {
		toggle.style.display = 'none'
		navCol2.style.display = 'flex'
		nav.style.display = 'flex'
		editorImg.setAttribute('src', 'images/illustration-editor-desktop.svg')
		featuresImg.setAttribute('src', 'images/illustration-laptop-desktop.svg')
	}
}

toggle.addEventListener('click', function () {
	toggle.classList.toggle('openmenu')
	navMenu.classList.toggle('visible')
})

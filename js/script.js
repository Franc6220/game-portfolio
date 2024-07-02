document.addEventListener("DOMContentLoaded", function() {
	// Smooth scrolling
	const links = document.querySelectorAll('a[href^="#"]');
	for (let link of links) {
		link.addEventListener("click", function(event) {
			event.preventDefault();
			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop,
					behavior: "smooth"
				});
			}
		});
	}

	// Image gallery modal
	const modal = document.getElementById("modal");
	const modalImg = document.getElementById("modal-image");
	const closeBtn = document.querySelector(".close");
	const galleryItems = document.querySelectorAll(".gallery-item");

	galleryItems.forEach(item => {
		item.addEventListener("click", function() {
			modal.style.display = "block";
			modalImg.src = this.src || this.querySelector("source").src;
		});
	});

	closeBtn.addEventListener("click", function() {
		modal.style.display = "none";
	});

	modal.addEventListener("click", function(event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	});

	// Form submission alert
	const contactForm = document.getElementById("contact-form");
	contactForm.addEventListener("submit", function(event) {
		event.preventDefault();
		alert("Thank you for your message!");
		contactForm.reset();
	});
});

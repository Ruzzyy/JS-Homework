'use strict'

class Form {
	constructor(field, template, error) {
		this.field = field;
		this.template = template;
		this.error = error;
		this.success = true;
	}
	
	validateForm() {
		var fieldVal = this.field.value;
		
		if (!fieldVal.match(this.template)) {
			this.success = false;
			this.field.value = '';
			this.error.style.display = 'block';
			this.field.classList.add('feedback__fieldBorderError');
			
			setTimeout(() => {
				this.error.style.display = 'none'
				this.field.classList.remove('feedback__fieldBorderError');
			}, 5000);
		}
	}
	
	showResult() {
		if (this.success) {
			document.getElementById('feedback__success').style.display = 'block';
		}
	}
}

document.getElementById('btnSubmit').onclick = function() {
	var feedBackName = document.getElementById('feedback__name');
	var templateName = /^[A-Za-zА-Яа-я]+/;
	var errorName = document.getElementById('feedback__errorName');
	
	var feedBackPhone = document.getElementById('feedback__phone');
	var templatePhone = /^\+\d\(\d{3}\)\d{3}\-\d{4}$/;
	var errorPhone = document.getElementById('feedback__errorPhone');
	
	var feedBackEmail = document.getElementById('feedback__email');
	var templateEmail = /^[a-z]+(\.|\-)?[a-z]+\@[a-z]+\.[a-z]{2,4}$/;
	var errorEmail = document.getElementById('feedback__errorEmail');
	
	var validateName = new Form(feedBackName, templateName, errorName);
	var validatePhone = new Form(feedBackPhone, templatePhone, errorPhone);
	var validateEmail = new Form(feedBackEmail, templateEmail, errorEmail);
	
	validateName.validateForm();
	validatePhone.validateForm();
	validateEmail.validateForm();
	
	validateEmail.showResult();
};
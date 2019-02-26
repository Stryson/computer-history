$(function () {

	// полоса прокрутки страницы (вверху)
	window.onscroll = () => {
		const scrolled = window.pageXOffset || document.documentElement.scrollTop,
			scrollHeight = Math.max(
				// ширина/высота содержимого, включая прокручиваемую область. Включает в себя padding и не включает полосы прокрутки.
				document.body.scrollHeight,
				document.documentElement.scrollHeight,

				// «внешняя» ширина/высота блока, включая рамки.
				document.body.offsetHeight,
				document.documentElement.offsetHeight,

				// ширина/высота содержимого вместе с полями padding, но без полосы прокрутки.
				document.body.clientHeight,
				document.documentElement.clientHeight
			);

		// знвчение равно числу от 0 до 1
		document.getElementById('bar').style.width = scrolled / (scrollHeight - document.documentElement.clientHeight) * 100 + '%';
	};

});
let time = null
class PraiseButton {
	constructor(num, clickEle,ele) {
		this.num = num;
		this.clickEle = clickEle;
		this.ele = ele;
	}
	clickFunc() {
		this.clickEle.click(() => {
			if (time) {
				clearTimeout(time);
			}
			time = setTimeout(() => {
				axios.get('/index')
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
				if (this.num < 10) {
					this.clickEle.css('-webkit-filter', 'grayscale(0)');
					this.num = addOne(this.num);
					this.ele.text(this.num);
				} else {
					this.clickEle.css('-webkit-filter', 'grayscale(1)');
					this.num = 0;
					this.ele.text(this.num);
				}
			}, 600)
		})
	}
}
class Thumb extends PraiseButton {
	constructor(num,clickEle, ele){
		super (num,clickEle, ele);
	}
}
export default {Thumb};
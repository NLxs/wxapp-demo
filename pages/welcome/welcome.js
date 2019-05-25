Page ({
	onTap(event) {
		// wx.navigateTo ({
		// 	url: '../posts/post'
		// })
		wx.switchTab ({
			url: '../posts/post'
		})
	},
	onReachBottom(event) {
		console.log('asfasdfa')
	}
})

import request from '../utils/request'

export function demo(params) {
	return request({
		url: 'yyzcpt-screen/reportshow/stsss',
		method: 'get',
		params: params
	})
}
import qs from 'qs';
export default {
	get (t,url,obj,cb) {
		t.axios.get(url,{
			params:obj|| null
		}).then(function(resp){
			if(resp.status==200){
				console.log(resp.statusText);
				cb&&cb(resp.data);
			}else{
				console.log(resp.statusText);
			}
		})
	},
	post (t,url,obj,cb) {
		t.axios({
			method:'post',
			url:url,
			data:obj.data || {}
		}).then(function(resp){
			if(resp.status==200){
				console.log(resp.statusText);
				cb&&cb(resp.data);
			}else{
				console.log(resp.statusText);
			}
		})
	}
}
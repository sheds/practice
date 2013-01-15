/**simple implement of DOM unrelated event
 *by tangguohe@outlook.com  
 */


//In my simple opinion, listener is a collection of events
;
(function(global) {

	var _indexOf = function(item, items) {
			if(Array.prototype.indexOf) {
				return items.indexOf(item);
			}
			var len = items.length;
			while(len--) {
				if(item === items[i]) return i;
			}
			return -1;
		},
		_forEach = function(items, fn, context) {
			if(Array.prototype.forEach) {
				items.forEach(fn, context);
			} else {
				for(var i = 0, l = items.length; i < l; i++) {//only think of array type
					fn.call(items[i], i, context);
				}
			}
		};

	var Events = function() {//wrapper
			if(!(this instanceof Events)) {
				return new Events();
			}
		}

	Events.prototype = {

		listeners: {},


		getListener: function(evt) {
			var lst = this.listeners;

			return lst[evt] || (lst[evt] = []);
		},


		removeListener: function(evt) {
			var lst = this.listeners;

			delete lst[evt];
		},


		addEvent: function(evt, listener) {
			var lst = this.getListener(evt);

			lst.push(listener);
		},


		removeEvent: function(evt, listener) {
			var lst = this.getListener(evt);

			if(typeof listener==="undefined"){
				this.removeListener(evt);
			}else{
				_forEach(lst, function(v, i) {
					if(v === listener) {
						lst.splice(i, 1);
					}
				});

				if(lst.length === 0) {
					this.removeListener(evt);
				}
			}

		},


		on: function(evt, listener) {//alias of addEvent
			this.addEvent(evt, listener);
		},


		off: function(evt, listener) {//aAlias of removeEvent
			this.removeEvent(evt, listener);
		},


		trigger: function(evt) {
			var lst = this.getListener(evt);
			_forEach(lst, function(v, i) {
				v();
			});
		}

	}

	global["Events"] = Events;

})(window);

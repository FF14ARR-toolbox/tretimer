/*
 * Copyright 2012 soundarapandian
 * Licensed under the Apache License, Version 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {

	Date.prototype.toLocaleString = function()
	{
    return [
        this.getFullYear(),
        this.getMonth() + 1,
        this.getDate()
        ].join( '/' ) + ' ' + [
        addZero(this.getHours()),
        addZero(this.getMinutes()),
        addZero(this.getSeconds())
        ].join( ':' );
	}

	$(document).on('click', 'button', function() {
		var lastDate = new Date();
		lastDate.setHours(lastDate.getHours()); ;
		localStorage.setItem('lastDate', lastDate.toLocaleString());
		$('.timer').countdown('destroy');
		loadTimer();
	});

	loadTimer();

	function loadTimer() {
		var lastDate = localStorage.getItem('lastDate');
		if (!lastDate) {
			lastDate = '---';
			var nextDate = new Date();
		} else {
			var nextDate = new Date(lastDate);
			nextDate.setHours(nextDate.getHours() + 18); ;
		}

		$('#lastDate').text(lastDate);
		$('#nextDate').text(nextDate.toLocaleString());

		  /*Timer control
		  For detailed usage visit the below link
		  http://keith-wood.name/countdownRef.html
		  */
		  $(".timer").countdown({
		    until: nextDate,
		    labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs']
		  });
	}

	function addZero($num) {
		if (10 > $num) {
			$num = '0' + $num;
		}
		return $num;
	}
});

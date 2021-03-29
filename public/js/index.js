var func = function chikan() {
    var val = result.value;
    result.value = val.replace( /(＋|-|×|÷)/g, ',$&,' );
}
var func2 = function chikan2() {
    var val = result.value;
    result.value = val.replace( /=/g, ',$&' );
}
function update( _v ) // input tag を更新する関数
{
    document.querySelector( 'input' ).value = _v
}
function slice() {
    var sliceResult = result.value;
    result.value = sliceResult.slice(0, -1);
}

var result = document.getElementById("result");

function edit(elem) {
    result.value = result.value + elem.value;
}
/*
$(function() {
    $('#button18').click(
      function() {
			$.ajax({
					url: "Test.html",
					type: "GET",
					dataType: "html",
					data: "result",
					success: function(data)
					{
						//取得成功したら実行する処理
						$('#result2').html(data);
					},
					error:function()
					{
						//取得失敗時に実行する処理
						alert('error');
					}
				});
			}
		);
	  });
*/
//async:非同期処理の構文
//crossDomain：ドメインからデータ持ってくる
//method：メソッド

$(function () {

	$('#button18').click(
		function () {
			const settings = {
				"async": true,
				"crossDomain": true,
				"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5",
				"method": "GET",
				"headers": {
					"x-rapidapi-key": "94552e227cmsh346d3bfe1dd31bap177b7fjsn7b5c4a0d0bfe",
					"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
				}
			};
			$.ajax(settings).done(
				function (res) {
					//取得成功したら実行する処理
					let result = res.data[0];
					// app_temp: -61.2
					// aqi: null

					let obj = {
						age: 12,
						name: "tom",
					}

					console.log(obj.age);
					console.log(obj.name);

					console.log(result);
					$('#result2').html(" solar_rad " + result.solar_rad + " vis " + result.vis);
				}
			);
		}
	);
});
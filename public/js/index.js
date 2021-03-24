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
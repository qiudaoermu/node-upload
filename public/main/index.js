$(function () {
  const fetchFileList = () => {
    $.ajax({
      type: 'get',
      url: "/file/list",
      success: function (res) {
        if (res.code == '200') {
          console.log(res.data)
        }
      },
      fail: (params) => {
        alert(params);
      }
    });
  }
  fetchFileList();

  $("#upload").click(function () {
    $("#file").click();
  });
  $("#file").change(function () {
    var formData = new FormData($('#uploadForm')[0]);
    $.ajax({
      type: 'post',
      url: "/file/uploading",
      data: formData,
      cache: false,
      processData: false,
      contentType: false,
      xhr: xhrOnProgress(function (e) {
        var per = Math.floor(100 * e.loaded / e.total);//计算百分比
        $('#bar').css({ 'width': per + "%", });
        $('#bar').html(per + '%');
      }),
      success: function (data) {
        if (data == '200') {
          $('#bar').html('finish')
          fetchFileList();
        }
      },
      fail: (params) => {
        alert(params);
      }
    });
  });
});
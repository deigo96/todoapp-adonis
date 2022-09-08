function deleteTask(id, e) {
  e.preventDefault()
  var form = e.target.form;
  Swal.fire({
    title: "Apakah anda yakin?",
    text: "Data tidak dapat dikembalikan lagi!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus!",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      $(this).closest("form").submit();
      // Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
}

$('.formDeleteTask').on('click', function() {
  let id = $(this).data("id")
  $(".formDeleteModal").attr("action", `/todos/${id}?_method=DELETE `)
})

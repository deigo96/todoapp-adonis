
function deleteTask(id) {
  Swal.fire({
    title: 'Apakah anda yakin?',
    text: "Data tidak dapat dikembalikan lagi!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Hapus!',
    cancelButtonText: 'Batal'
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        url: `todos/${id}`,
        method: "DELETE",
        success: function(data) {
              Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  })
}
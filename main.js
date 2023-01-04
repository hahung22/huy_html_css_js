$(document).ready(function () {
    $("#contact-us").click(async function (e) {
        e.preventDefault();
        const { value: email } = await Swal.fire({
            title: "Input email address",
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address",
        });

        if (email) {
            const { value: text } = await Swal.fire({
                input: "textarea",
                inputLabel: "Message",
                inputPlaceholder: "Type your message here...",
                inputAttributes: {
                    "aria-label": "Type your message here",
                },
                showCancelButton: true,
            });

            if (text) {
                Swal.fire({
                    icon: "success",
                    title: "Send message to us successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    });
});

$(document).ready(function () {
    $("#our-service").click(function (e) {
        e.preventDefault();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
        });
    });
});

$(document).ready(function () {
    $(".checkout").click(async function (e) {
        e.preventDefault();
        const { value: formValues } = await Swal.fire({
            title: "Multiple inputs",
            html:
                '<label for="swal-input1">Email</label><input id="swal-input1" class="swal2-input" type="email"><br>' +
                '<label for="swal-input1">Phone</label><input id="swal-input2" class="swal2-input" type="number">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value,
                ];
            },
        });

        if (formValues) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, order this dog!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        "Successfully Order x-dog!",
                        "We will respond as soon as possible.",
                        "success"
                    );
                }
            });
        }
    });
});

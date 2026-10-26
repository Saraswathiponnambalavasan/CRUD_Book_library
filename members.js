// Sample members
let members = [
    {
        id: "M001",
        name: "Arun Kumar",
        email: "arun@gmail.com",
        phone: "9876543210",
        membership: "Student",
        joinDate: "2026-09-01",
        status: "Active"
    },
    {
        id: "M002",
        name: "Priya Sharma",
        email: "priya@gmail.com",
        phone: "9876543211",
        membership: "Student",
        joinDate: "2026-09-03",
        status: "Active"
    },
    {
        id: "M003",
        name: "Rahul Raj",
        email: "rahul@gmail.com",
        phone: "9876543212",
        membership: "Faculty",
        joinDate: "2026-08-25",
        status: "Active"
    }
];


// Display members
function displayMembers() {

    const tableBody = document.getElementById("memberTableBody");

    tableBody.innerHTML = "";

    members.forEach(function(member) {

        const row = `
            <tr>
                <td>${member.id}</td>
                <td>${member.name}</td>
                <td>${member.email}</td>
                <td>${member.phone}</td>
                <td>${member.membership}</td>
                <td>${member.joinDate}</td>

                <td>
                    <span class="${member.status === "Active"
                        ? "status-active"
                        : "status-inactive"}">
                        ${member.status}
                    </span>
                </td>

                <td>
                    <button class="edit-btn"
                        onclick="editMember('${member.id}')">
                        Edit
                    </button>

                    <button class="delete-btn"
                        onclick="deleteMember('${member.id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });

    updateStatistics();
}


// Open Add Member form
function openMemberForm() {

    document.getElementById("memberModal").style.display = "block";

    document.getElementById("formTitle").innerText = "Add Member";

    document.getElementById("memberForm").reset();

    document.getElementById("editMemberId").value = "";
}


// Close form
function closeMemberForm() {

    document.getElementById("memberModal").style.display = "none";
}


// Add / Edit Member
document.getElementById("memberForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const editId = document.getElementById("editMemberId").value;

    const memberData = {

        id: editId || "M" + String(members.length + 1).padStart(3, "0"),

        name: document.getElementById("memberName").value,

        email: document.getElementById("memberEmail").value,

        phone: document.getElementById("memberPhone").value,

        membership: document.getElementById("membershipType").value,

        joinDate: document.getElementById("joinDate").value,

        status: document.getElementById("memberStatus").value
    };


    // Edit existing member
    if (editId) {

        const index = members.findIndex(member => member.id === editId);

        members[index] = memberData;

    }

    // Add new member
    else {

        members.push(memberData);

    }


    displayMembers();

    closeMemberForm();

});


// Edit member
function editMember(id) {

    const member = members.find(member => member.id === id);

    document.getElementById("editMemberId").value = member.id;

    document.getElementById("memberName").value = member.name;

    document.getElementById("memberEmail").value = member.email;

    document.getElementById("memberPhone").value = member.phone;

    document.getElementById("membershipType").value = member.membership;

    document.getElementById("joinDate").value = member.joinDate;

    document.getElementById("memberStatus").value = member.status;

    document.getElementById("formTitle").innerText = "Edit Member";

    document.getElementById("memberModal").style.display = "block";
}


// Delete member
function deleteMember(id) {

    if (confirm("Are you sure you want to delete this member?")) {

        members = members.filter(member => member.id !== id);

        displayMembers();
    }
}


// Search members
function searchMembers() {

    const searchText =
        document.getElementById("searchMember").value.toLowerCase();

    const rows = document.querySelectorAll("#memberTableBody tr");

    rows.forEach(function(row) {

        const text = row.innerText.toLowerCase();

        row.style.display =
            text.includes(searchText) ? "" : "none";
    });
}


// Update statistics
function updateStatistics() {

    document.getElementById("totalMembers").innerText =
        members.length;

    document.getElementById("activeMembers").innerText =
        members.filter(member => member.status === "Active").length;

    document.getElementById("inactiveMembers").innerText =
        members.filter(member => member.status === "Inactive").length;
}


// Display members when page loads
displayMembers();

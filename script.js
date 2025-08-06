
function goToService(page) {
  window.location.href = page;
}

function showCurrentMonth() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const now = new Date();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  const titleElement = document.getElementById("month-title");
  if (titleElement) {
    titleElement.textContent = `${month} ${year}`;
  }
}

// Emergency 911 function for seniors - Simple calling modal
function emergency911() {
  // Close all open modals first
  const allModals = document.querySelectorAll('.modal');
  allModals.forEach(modal => {
    modal.style.display = 'none';
  });
  
  // Also close emergency modals that might be open
  const emergencyModals = document.querySelectorAll('.emergency-modal');
  emergencyModals.forEach(modal => {
    modal.style.display = 'none';
  });
  
  // Reset any modal-related variables
  if (typeof currentText !== 'undefined') currentText = "";
  if (typeof selectedDate !== 'undefined') selectedDate = "";
  
  // Show the emergency confirmation modal
  document.getElementById('emergencyModal').style.display = 'flex';
}

function confirmEmergency() {
  // Close the confirmation modal
  document.getElementById('emergencyModal').style.display = 'none';
  
  // Try to call 911
  // window.location.href = "tel:911";
  
  // Show the appropriate calling modal based on what's available
  setTimeout(() => {
    const emergencyCallingModal = document.getElementById('emergencyCallingModal');
    const emergencyFollowUpModal = document.getElementById('emergencyFollowUpModal');
    
    if (emergencyCallingModal) {
      emergencyCallingModal.style.display = 'flex';
    } else if (emergencyFollowUpModal) {
      emergencyFollowUpModal.style.display = 'flex';
    }
  }, 500);
  
  // Log the emergency button usage for analytics/safety
  console.log("Emergency 911 button activated at:", new Date().toISOString());
}

function closeEmergencyModal() {
  // Close any emergency modals
  document.getElementById('emergencyModal').style.display = 'none';
  
  // Handle different emergency modal names across files
  const emergencyCallingModal = document.getElementById('emergencyCallingModal');
  if (emergencyCallingModal) {
    emergencyCallingModal.style.display = 'none';
  }
  
  const emergencyFollowUpModal = document.getElementById('emergencyFollowUpModal');
  if (emergencyFollowUpModal) {
    emergencyFollowUpModal.style.display = 'none';
  }
  
  // Reset any modal-related variables that might have been cleared during emergency
  if (typeof currentText !== 'undefined') currentText = "";
  if (typeof selectedDate !== 'undefined') selectedDate = "";
}

document.addEventListener("DOMContentLoaded", showCurrentMonth);


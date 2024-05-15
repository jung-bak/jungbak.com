document.getElementById('resume-button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'documents/resume.pdf';
    link.download = 'Jung_Bak_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('linkedin-link').addEventListener('click', function() {
    console.log('LinkedIn link clicked');
});

document.getElementById('github-link').addEventListener('click', function() {
    console.log('GitHub link clicked');
});

document.getElementById('email-link').addEventListener('click', function() {
    console.log('Email link clicked');
});

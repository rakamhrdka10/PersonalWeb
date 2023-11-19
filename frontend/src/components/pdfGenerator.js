// pdfGenerator.js
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (cvData) => {
  if (!cvData) {
    alert("CV data is not available. Please wait for the data to load.");
    return;
  }

  const doc = new jsPDF();

  // Set document properties (optional)
  doc.setProperties({
    title: "My CV",
    author: "Your Name",
  });

  // Set the initial y-coordinate
  let startY = 10;

  // Define a function to add data and table with a header
  function addDataAndTable(title, data, header) {
    if (startY + 20 > 280) {
      doc.addPage();
      startY = 10;
    }
    doc.text(title, 10, startY);
    startY += 10;
    doc.autoTable({
      head: [header], // Header row
      body: data,
      startY,
      theme: "striped",
    });
    startY = doc.autoTable.previous.finalY + 10;
  }

  // Add personal data to the CV
  const personalHeader = ["Attribute", "Value"];
  const personalData = [
    ["Name", cvData.personal.nama],
    ["Date of Birth", cvData.personal.tanggal_lahir],
    ["Place of Birth", cvData.personal.tempat_lahir],
    ["Age", cvData.personal.usia],
    ["Height", cvData.personal.tinggi_badan],
    ["Weight", cvData.personal.berat_badan],
    ["Address", cvData.personal.alamat],
    ["Religion", cvData.personal.agama],
    ["Gender", cvData.personal.jenis_kelamin],
    ["Phone", cvData.personal.telp],
    ["Email", cvData.personal.email],
    ["Marital Status", cvData.personal.status],
    ["Instagram", cvData.personal.instagram],
    ["LinkedIn", cvData.personal.linkedin],
    ["GitHub", cvData.personal.github],
  ];
  addDataAndTable("Personal Information", personalData, personalHeader);

  // Add education data to the CV
  const educationHeader = ["Institution", "Major", "Start Year", "End Year"];
  const educationData = cvData.education.map((edu) => [
    edu.instansi_pendidikan,
    edu.jurusan,
    edu.tahun_mulai_ajaran,
    edu.tahun_akhir_ajaran,
  ]);
  addDataAndTable("Education", educationData, educationHeader);

  // Add organization data to the CV
  const organizationHeader = ["Organization", "Position", "Start Date", "End Date"];
  const organizationData = cvData.organization.map((org) => [
    org.nama_organisasi,
    org.posisi,
    org.tanggal_mulai_menjabat,
    org.tanggal_akhir_menjabat,
  ]);
  addDataAndTable("Organizations", organizationData, organizationHeader);

  // Add skills data to the CV
  const skillsHeader = ["Skill", "Capability"];
  const skillsData = cvData.skills.map((skill) => [
    skill.nama_skill,
    skill.capability + "%",
  ]);
  addDataAndTable("Skills", skillsData, skillsHeader);

  // Add portfolio data to the CV
  const portfolioHeader = ["Portfolio", "Description"];
  const portfolioData = cvData.portfolio.map((portfolio) => [
    portfolio.nama_portofolio,
    portfolio.deskripsi_portofolio,
  ]);
  addDataAndTable("Portfolio", portfolioData, portfolioHeader);

  const pdfDataUri = doc.output("datauristring");

  const newTab = window.open();
  newTab.document.write(
    '<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe'
  );
};

export default generatePDF;
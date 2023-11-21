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
  let startY = 20;

  // Add separating line
  doc.setLineWidth(0.5);
  doc.line(14, startY, 196, startY);
  doc.line(14, startY + 1, 196, startY + 1);
  startY += 10;

  // Add header with "Curriculum vitae" text
  doc.setFontSize(18);
  doc.setFont("bold");
  doc.text("Curriculum vitae", 105, startY, { align: "center" });
  startY += 5;

  // Add separating line
  doc.setLineWidth(0.5);
  doc.line(14, startY, 196, startY);
  doc.line(14, startY + 1, 196, startY + 1);
  startY += 20;

  // Define a function to add data and table with a header
  function addDataAndTable(title, data, header) {
    if (startY + 20 > 280) {
      doc.addPage();
      startY = 10;
    }
    doc.setTextColor(0, 0, 0); // Set text color to black
    doc.text(title, 10, startY);
    startY += 5;

    // Check if it's the personal data table
    const isPersonalTable = title === "Personal Information";

    const tableOptions = {
      body: data,
      startY,
      theme: "striped", // You can remove this line if you don't want alternating row colors
      styles: {
        lineColor: isPersonalTable ? [255, 255, 255] : [0, 0, 0], // White color for personal data table
        lineWidth: isPersonalTable ? 0 : 0.1, // No border width for personal data table
        fillColor: [255, 255, 255], // Add this line to remove the background color
        textColor: [0, 0, 0], // Set text color to black
      },
      columnWidth: "auto", // Set the width of columns automatically
    };

    // Check if it's the personal data table and customize styles
    if (!isPersonalTable) {
      tableOptions.head = [header]; // Header row
    }

    doc.autoTable(tableOptions);

    startY = doc.autoTable.previous.finalY + (isPersonalTable ? 10 : 15);
  }

  // Add personal data to the CV
  const personalHeader = ["Attribute", "Value"];
  const personalData = [
    ["Name", ":", cvData.personal.nama],
    ["Date of Birth", ":", cvData.personal.tanggal_lahir],
    ["Place of Birth", ":", cvData.personal.tempat_lahir],
    ["Age", ":", cvData.personal.usia],
    ["Height", ":", cvData.personal.tinggi_badan],
    ["Weight", ":", cvData.personal.berat_badan],
    ["Address", ":", cvData.personal.alamat],
    ["Religion", ":", cvData.personal.agama],
    ["Gender", ":", cvData.personal.jenis_kelamin],
    ["Phone", ":", cvData.personal.telp],
    ["Email", ":", cvData.personal.email],
    ["Marital Status", ":", cvData.personal.status],
    ["Instagram", ":", cvData.personal.instagram],
    ["LinkedIn", ":", cvData.personal.linkedin],
    ["GitHub", ":", cvData.personal.github],
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
  const organizationHeader = [
    "Organization",
    "Position",
    "Start Date",
    "End Date",
  ];
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

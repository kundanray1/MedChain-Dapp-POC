const MedCycle = artifacts.require("MedCycle");
const Admin = artifacts.require("Admin");
const RawMaterial = artifacts.require("RawMaterial");
const Distributor = artifacts.require("Distributor");
// const Medicine = artifacts.require("Medicine");
const Supplier = artifacts.require("Supplier");
const Transporter = artifacts.require("Transporter");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Admin);

  const admin = await Admin.deployed();

  console.log(admin.address);
  // await deployer.deploy(Medicine, admin.address);
  // await deployer.deploy(Distributor, admin.address);
  // await deployer.deploy(RawMaterial, admin.address);
  await deployer.deploy(Supplier, admin.address);
  await deployer.deploy(Transporter, admin.address);
  await deployer.deploy(MedCycle, admin.address);
};

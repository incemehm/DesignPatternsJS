function IntelProcessor  () {
	this.IntegrateProcessor = function() { console.log("Intel işlemci entegre ediliyor..."); }          
};
function AMDProcessor () {
	this.IntegrateProcessor = function() { console.log("AMD işlemci entegre ediliyor..."); }          
};

function IbmRam () {
	this.IntegrateRAM = function() { console.log("IBM RAM entegre ediliyor..."); }          
};
function KingstonRam  () {
	this.IntegrateRAM = function() { console.log("Kingston ram entegre ediliyor..."); }          
};

function SamsungHDD () {
	this.IntegrateHDD = function() { console.log("Samsung HDD entegre ediliyor..."); }          
};
function ToshibaHDD () {
	this.IntegrateHDD = function() { console.log("Toshiba HDD entegre ediliyor..."); }          
};

function HighPerformanceHardwareFactory () {
    this.ProcessorModel = function (docType) {
        var IProcessor  = new IntelProcessor();
        return IProcessor;
    }
	this.RAMModel = function (docType) {
        var IRam  = new IbmRam();
        return IRam;
    }
	this.HDDModel = function (docType) {
        var IHdd  = new ToshibaHDD();
        return IHdd ;
    }
}

function FairPriceHardwareFactory () {
    this.ProcessorModel = function (docType) {
        var IProcessor  = new AMDProcessor();
        return IProcessor;
    }
	this.RAMModel = function (docType) {
        var IRam  = new KingstonRam();
        return IRam;
    }
	this.HDDModel = function (docType) {
        var IHdd  = new SamsungHDD();
        return IHdd ;
    }
}

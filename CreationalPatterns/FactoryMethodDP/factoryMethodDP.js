function DocumentFactory() {
    this.CreateVersion = function (docType) {
        var IDocument;
 
        if (docType === "PDF") 
		{
            IDocument = new PdfDocument();
        } 
		else if (docType === "DOCX") {
            IDocument = new WordDocument ();
        } 
		else
		{
            throw "Hatalı Seçim";
        }
  
        return IDocument;
    }
}
 
function PdfDocument () {
    var _title  = "A_Clockwork_Orange_PDF"; // private instance data
	var _content = "PDF:  In 1970..............";    // private instance data

	this.GetDocumentTitle = function() {return(_title );}     // methods with access to private variable
	this.GetDocumentContent = function() {return(_content);}     // methods with access to private variable
};
 
function WordDocument  () {
    var _title  = "A_Clockwork_Orange_DOC"; // private instance data
	var _content = "DOC:  In 1970..............";    // private instance data

	this.GetDocumentTitle = function() {return(_title );}     // methods with access to private variable
	this.GetDocumentContent = function() {return(_content);}     // methods with access to private variable
};

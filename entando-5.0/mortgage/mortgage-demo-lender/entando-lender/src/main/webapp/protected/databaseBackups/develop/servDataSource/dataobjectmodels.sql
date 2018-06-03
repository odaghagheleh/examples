INSERT INTO dataobjectmodels (modelid,datatype,descr,model,stylesheet) VALUES (1,'AAA','Model for mortgage','<div class="ibox ibox-padding">
    <div class="ibox-title">
		<!-- <h3 class="control-label editLabel" id="MORTGAGE_REQUEST_PROCESS">Mortgage Process</h3> -->
        <h3 class="control-label editLabel" id="JPKIE_TITLE_mortgage">$i18n.getLabel("JPKIE_TITLE_mortgage")</h3>
    </div>
    <div class="ibox-content">
        <div id="dialog-response-process" title="Response"></div>
        <form id="bpm-form" method="post" novalidate="novalidate" class="ui-dform-form" action="$info.getActionPathUrl(''/ExtStr2/do/bpm/FrontEnd/DataTypeForm/save'')">
			<input type="hidden" id="processId" name="processId" class="ui-dform-hidden" value="com.redhat.bpms.examples.mortgage.MortgageApplication">
			<input type="hidden" id="containerId" name="containerId" class="ui-dform-hidden" value="mortgage">
<div class="ui-dform-div">
	<fieldset class="ui-dform-fieldset"><legend class="control-label editLabel ui-dform-legend">$i18n.getLabel("JPKIE_FORM_application")</legend>
<div class="ui-dform-div form-group">
	<label id="JPKIE_application_downPayment" for="jpkieformparam_application_downPayment" class="control-label editLabel ui-dform-label editable editable-click">$i18n.getLabel("JPKIE_application_downPayment")</label>
	<input type="number" id="jpkieformparam_application_downPayment" name="$data.application_downPayment.type:application_downPayment" labelkey="JPKIE_application_downPayment" class="form-control ui-widget ui-dform-number" aria-required="true" value="$data.application_downPayment.number" >
</div>
<div class="ui-dform-div form-group">
	<label id="JPKIE_application_amortization" for="jpkieformparam_application_amortization" class="control-label editLabel ui-dform-label editable editable-click">$i18n.getLabel("JPKIE_application_amortization")</label>
	<input type="number" id="jpkieformparam_application_amortization" name="$data.application_amortization.type:application_amortization" labelkey="JPKIE_application_amortization" class="form-control ui-widget ui-dform-number" aria-required="true" value="$data.application_amortization.number" >
</div>
	</fieldset>
</div>
<div class="ui-dform-div">
	<fieldset class="ui-dform-fieldset"><legend class="control-label editLabel ui-dform-legend">$i18n.getLabel("JPKIE_FORM_applicant")</legend>
<div class="ui-dform-div form-group">
	<label id="JPKIE_applicant_name" for="jpkieformparam_applicant_name" class="control-label editLabel ui-dform-label editable editable-click">$i18n.getLabel("JPKIE_applicant_name")</label>
	<input type="text" id="jpkieformparam_applicant_name" name="$data.applicant_name.type:applicant_name" labelkey="JPKIE_applicant_name" class="form-control ui-widget ui-dform-number" aria-required="true" value="$data.applicant_name.text" >
</div>
<div class="ui-dform-div form-group">
	<label id="JPKIE_applicant_ssn" for="jpkieformparam_applicant_ssn" class="control-label editLabel ui-dform-label editable editable-click">$i18n.getLabel("JPKIE_applicant_ssn")</label>
	<input type="number" id="jpkieformparam_applicant_ssn" name="$data.applicant_ssn.type:applicant_ssn" labelkey="JPKIE_applicant_ssn" class="form-control ui-widget ui-dform-number" aria-required="true" value="$data.applicant_ssn.number" >
</div>
<div class="ui-dform-div form-group">
	<label id="JPKIE_applicant_income" for="jpkieformparam_applicant_income" class="control-label editLabel ui-dform-label editable editable-click">$i18n.getLabel("JPKIE_applicant_income")</label>
	<input type="number" id="jpkieformparam_applicant_income" name="$data.applicant_income.type:applicant_income" labelkey="JPKIE_applicant_income" class="form-control ui-widget ui-dform-number" aria-required="true" value="$data.applicant_income.number" >
</div>
	</fieldset>
</div>
<div class="ui-dform-div">
	<fieldset class="ui-dform-fieldset"><legend class="control-label editLabel ui-dform-legend">$i18n.getLabel("JPKIE_FORM_property")</legend>
<div class="ui-dform-div form-group">
	<label id="JPKIE_property_address" for="jpkieformparam_property_address" class="control-label editLabel ui-dform-label editable editable-click">$i18n.getLabel("JPKIE_property_address")</label>
	<input type="text" id="jpkieformparam_property_address" name="$data.property_address.type:property_address" labelkey="JPKIE_property_address" class="form-control ui-widget ui-dform-number" aria-required="true" value="$data.property_address.text" >
</div>
<div class="ui-dform-div form-group">
	<label id="JPKIE_property_price" for="jpkieformparam_property_price" class="control-label editLabel ui-dform-label editable editable-click">$i18n.getLabel("JPKIE_property_price")</label>
	<input type="number" id="jpkieformparam_property_price" name="$data.property_price.type:property_price" labelkey="JPKIE_property_price" class="form-control ui-widget ui-dform-number" aria-required="true" value="$data.property_price.number" >
</div>
	</fieldset>
</div>
<div class="ui-dform-div">
	<input type="submit" name="submit-bpm-form" class="ui-dform-submit btn btn-primary" value="submit">
</div>
		</form>
    </div>
</div>
',NULL);

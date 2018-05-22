INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('messages_system', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">System Messages</property>
<property key="it">Messaggi di Sistema</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('login_form', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Login Form</property>
<property key="it">Form di Login</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('formAction', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Internal Servlet</property>
<property key="it">Invocazione di una Servlet Interna</property>
</properties>', '<config>
	<parameter name="actionPath">
		Path to an action or to a JSP. You must prepend ''/ExtStr2'' to any Struts2 action path
	</parameter>
	<action name="configSimpleParameter"/>
</config>', NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando_apis', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">APIs</property>
<property key="it">APIs</property>
</properties>
', NULL, NULL, 'formAction', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="actionPath">/ExtStr2/do/Front/Api/Resource/list.action</property>
</properties>
', 1, 'free');
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('userprofile_editCurrentUser', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Edit Current User</property>
<property key="it">Edita Utente Corrente</property>
</properties>', NULL, NULL, 'formAction', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="actionPath">/ExtStr2/do/Front/CurrentUser/edit.action</property>
</properties>', 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('userprofile_editCurrentUser_password', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Edit Current User Password</property>
<property key="it">Edita Password Utente Corrente</property>
</properties>', NULL, NULL, 'formAction', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="actionPath">/ExtStr2/do/Front/CurrentUser/editPassword.action</property>
</properties>', 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('userprofile_editCurrentUser_profile', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Edit Current User Profile</property>
<property key="it">Edita Profilo Utente Corrente</property>
</properties>', NULL, NULL, 'formAction', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="actionPath">/ExtStr2/do/Front/CurrentUser/Profile/edit.action</property>
</properties>', 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-right_col_help_purple', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
    <property key="en">entando-widget-right_col_help_purple</property>
    <property key="it">entando-widget-right_col_help_purple </property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-3-steps-mortgage-light', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">entando-widget-3-steps-mortgage-light</property>
<property key="it">entando-widget-3-steps-mortgage-light</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-banner-main-page', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
    <property key="en">entando-widget-banner-main-page</property>
    <property key="it">entando-widget-banner-main-page </property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('content_viewer', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Contents - Publish a Content</property>
<property key="it">Contenuti - Pubblica un Contenuto</property>
</properties>', '<config>
	<parameter name="contentId">Content ID</parameter>
	<parameter name="modelId">Content Model ID</parameter>
	<action name="viewerConfig"/>
</config>', 'jacms', NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('search_result', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Search - Search Result</property>
<property key="it">Ricerca - Risultati della Ricerca</property>
</properties>', NULL, 'jacms', NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('content_viewer_list', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Contents - Publish a List of Contents</property>
<property key="it">Contenuti - Pubblica una Lista di Contenuti</property>
</properties>', '<config>
	<parameter name="contentType">Content Type (mandatory)</parameter>
	<parameter name="modelId">Content Model</parameter>
	<parameter name="userFilters">Front-End user filter options</parameter>
	<parameter name="category">Content Category **deprecated**</parameter>
	<parameter name="categories">Content Category codes (comma separeted)</parameter>
	<parameter name="orClauseCategoryFilter" />
	<parameter name="maxElemForItem">Contents for each page</parameter>
	<parameter name="maxElements">Number of contents</parameter>
	<parameter name="filters" />
	<parameter name="title_{lang}">Widget Title in lang {lang}</parameter>
	<parameter name="pageLink">The code of the Page to link</parameter>
	<parameter name="linkDescr_{lang}">Link description in lang {lang}</parameter>
	<action name="listViewerConfig"/>
</config>', 'jacms', NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('row_content_viewer_list', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Contents - Publish Contents</property>
<property key="it">Contenuti - Pubblica Contenuti</property>
</properties>', '<config>
	<parameter name="contents">Contents to Publish (mandatory)</parameter>
	<parameter name="maxElemForItem">Contents for each page</parameter>
	<parameter name="title_{lang}">Widget Title in lang {lang}</parameter>
	<parameter name="pageLink">The code of the Page to link</parameter>
	<parameter name="linkDescr_{lang}">Link description in lang {lang}</parameter>
	<action name="rowListViewerConfig" />
</config>', 'jacms', NULL, NULL, 1, 'free');
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-inspinia-meter-center-page', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">entando-inspinia-meter-center-page</property>
<property key="it">entando-inspinia-meter-center-page</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-banner-advisors', '<?xml version="1.0" encoding="UTF-8"?>
<properties><property key="en">entando-widget-banner-advisors</property><property key="it">entando-widget-banner-advisors</property></properties>
', NULL, NULL, NULL, NULL, 1, 'free');
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-inspinia-meter-left-page', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">entando-inspinia-meter-left-page</property>
<property key="it">entando-inspinia-meter-left-page</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-banner_main_page_light', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
    <property key="en">entando-widget-banner_main_page_light</property>
    <property key="it">entando-widget-banner_main_page_light </property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-security_banner_light', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
    <property key="en">entando-widget-security_banner_light</property>
    <property key="it">entando-widget-security_banner_light </property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-data_report_tweets', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">entando-widget-data_report_tweets</property>
<property key="it">entando-widget-data_report_tweets</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-login_form_inspinia', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Dropdown Sign In</property>
<property key="it">Dropdown Sign In</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-language_choose_inspinia', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Choose a Language</property>
<property key="it">Choose a Language</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-meeting_list-purple', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
    <property key="en">entando-widget-meeting_list-purple</property>
    <property key="it">entando-widget-meeting_list-purple </property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-search_result_inspinia', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Search Result</property>
<property key="it">Search Result</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-navigation_bar_inspinia', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Navigation - Bar</property>
<property key="it">Navigazione - Barra Orizzontale</property>
</properties>', '<config>
	<parameter name="navSpec">Rules for the Page List auto-generation</parameter>
	<action name="navigatorConfig" />
</config>', NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-inspinia-meter-right-page', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">entando-inspinia-meter-right-page</property>
<property key="it">entando-inspinia-meter-right-page</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-left_columns_mortgage', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
    <property key="en">entando-widget-left_columns_mortgage</property>
    <property key="it">entando-widget-left_columns_mortgage </property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-banner_avarage_light', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">entando-widget-banner_avarage_light</property>
<property key="it">entando-widget-banner_avarage_light</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('bpm-datatype-form', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">BPM-Form by DataType</property>
<property key="it">BPM-Form by DataType</property>
</properties>', '<config>
	<parameter name="dataTypeCode">Data Type Code</parameter>
	<parameter name="dataUxId">Data Ux ID</parameter>
	<parameter name="widgetInfoId">Widget Info ID</parameter>
	<action name="jpkiebpmBpmFormWidgetViewerConfig"/>
</config>', 'jpkiebpm', NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('bpm-datatable', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">BPM-Datatable</property>
<property key="it">BPM-Datatable</property>
</properties>', '<config>
	<parameter name="widgetInfoId">WidgetInfoID</parameter>
	<action name="jpkiebpmBpmDatatableWidgetViewerConfig"/>
</config>', 'jpkiebpm', NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code, titles, parameters, plugincode, parenttypecode, defaultconfig, locked, maingroup) VALUES ('entando-widget-search_form_inspinia', '<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">Search Form</property>
<property key="it">Search Form</property>
</properties>', NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-datatable-process-list','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Process list</property>
<property key="it">PAM-Lista processi</property>
</properties>','<config>
	<parameter name="widgetInfoId">WidgetInfoID</parameter>
	<action name="jpkiebpmBpmProcessDatatableWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-case-progress-status','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Case progress status</property>
<property key="it">PAM-Case stato del processo</property>
</properties>','<config>
        <parameter name="channel">channel</parameter>
	<parameter name="frontEndMilestonesData">frontEndMilestonesData</parameter>
	<action name="jpkiebpmBpmCaseProgressWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-case-instance-selector','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Case instance selector</property>
<property key="it">Selettore di istanza Case PAM</property>
</properties>','<config>
        <parameter name="channel">channel</parameter>
	<parameter name="frontEndCaseData">frontEndCaseData</parameter>
	<action name="jpkiebpmBpmCaseInstanceSelectorWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-case-comments','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Case comments</property>
<property key="it">Commenti del caso PAM</property>
</properties>','<config>
        <parameter name="channel">channel</parameter>
	<parameter name="frontEndCaseData">frontEndCaseData</parameter>
	<action name="jpkiebpmBpmCaseInstanceCommentsWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-case-details','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Case details</property>
<property key="it">Dettagli caso PAM</property>
</properties>','<config>
        <parameter name="channel">channel</parameter>
	<parameter name="frontEndCaseData">frontEndCaseData</parameter>
	<action name="jpkiebpmBpmCaseInstanceDetailsWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-case-actions','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Case actions</property>
<property key="it">Azioni caso PAM</property>
</properties>','<config>
        <parameter name="channel">channel</parameter>
	<parameter name="frontEndCaseData">frontEndCaseData</parameter>
	<action name="jpkiebpmBpmCaseInstanceActionsWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-case-roles','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Case roles</property>
<property key="it">Ruoli caso PAM</property>
</properties>','<config>
        <parameter name="channel">channel</parameter>
	<parameter name="frontEndCaseData">frontEndCaseData</parameter>
	<action name="jpkiebpmBpmCaseInstanceRolesWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-case-chart','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Case chart</property>
<property key="it">PAM-Case chart</property>
</properties>','<config>
        <parameter name="channel">channel</parameter>
	<parameter name="frontEndCaseData">frontEndCaseData</parameter>
	<action name="jpkiebpmBpmCaseInstanceChartWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-process-diagram','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Process diagram</property>
<property key="it">Diagramma di processo PAM</property>
</properties>','<config>
        <parameter name="channel">channel</parameter>
	<parameter name="frontEndCaseData">frontEndCaseData</parameter>
	<action name="jpkiebpmBpmProcessDiagramWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);
INSERT INTO widgetcatalog (code,titles,parameters,plugincode,parenttypecode,defaultconfig,locked,maingroup) VALUES ('bpm-case-file','<?xml version="1.0" encoding="UTF-8"?>
<properties>
<property key="en">PAM-Case file</property>
<property key="it">File caso PAM</property>
</properties>','<config>
        <parameter name="channel">channel</parameter>
	<parameter name="frontEndCaseData">frontEndCaseData</parameter>
	<action name="jpkiebpmBpmCaseInstanceFileWidgetViewerConfig"/>
</config>','jpkiebpm',NULL,NULL,1,NULL);

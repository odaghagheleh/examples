package org.apache.jsp.WEB_002dINF.apsadmin.jsp.common.layouts.assets_002dmore.dashboard;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class dashboard_002dextra_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.Vector _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_resourceURL_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_url_namespace_action_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_property_value_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_text_name_nobody;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _jspx_tagPool_wp_resourceURL_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_url_namespace_action_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_property_value_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_text_name_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _jspx_tagPool_wp_resourceURL_nobody.release();
    _jspx_tagPool_s_url_namespace_action_nobody.release();
    _jspx_tagPool_s_property_value_nobody.release();
    _jspx_tagPool_s_text_name_nobody.release();
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_0(_jspx_page_context))
        return;
      out.write("administration/js/jquery-dateFormat.min.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_1(_jspx_page_context))
        return;
      out.write("administration/patternfly/js/components/c3/c3.min.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_2(_jspx_page_context))
        return;
      out.write("administration/patternfly/js/components/d3/d3.min.js\"></script>\n");
      out.write("\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("    var pageStatusAction = '");
      if (_jspx_meth_s_url_0(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("    var pageTableAction = '");
      if (_jspx_meth_s_url_1(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("    var contentStatusAction = '");
      if (_jspx_meth_s_url_2(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("    var contentTableAction = '");
      if (_jspx_meth_s_url_3(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("    var currentLang = '");
      if (_jspx_meth_s_property_0(_jspx_page_context))
        return;
      out.write("';\n");
      out.write("    var pageStatusMap = {'online': '<span class=\"fa fa-circle green\"></span>',\n");
      out.write("        'onlineNotDraft': '<span class=\"fa fa-circle yellow\"></span>',\n");
      out.write("        'draft': '<span class=\"fa fa-circle gray\"></span>'\n");
      out.write("    \t}\n");
      out.write("    var contentStatusMap = {'online':'");
      if (_jspx_meth_s_text_0(_jspx_page_context))
        return;
      out.write("',\n");
      out.write("            'onlineWithChanges':'");
      if (_jspx_meth_s_text_1(_jspx_page_context))
        return;
      out.write("',\n");
      out.write("            'draft':'");
      if (_jspx_meth_s_text_2(_jspx_page_context))
        return;
      out.write("'\n");
      out.write("        }\n");
      out.write("    \n");
      out.write("    $(document).ready(function(){\n");
      out.write("\n");
      out.write("        // Page status\n");
      out.write("        $.ajax({\n");
      out.write("            url: pageStatusAction,\n");
      out.write("            cache: false,\n");
      out.write("            crossoDomain: true,\n");
      out.write("            complete: function(resp, status) {\n");
      out.write("                if (status == 'success') {\n");
      out.write("                    resp = $.parseJSON(resp.responseText);\n");
      out.write("                    \n");
      out.write("                    $('#online-pages').html(resp.online);\n");
      out.write("                    $('#onlineWithChanges-pages').html(resp.onlineWithChanges);\n");
      out.write("                    $('#draft-pages').html(resp.draft);\n");
      out.write("                    $('#lastUpdate-pages').html($.format.date(resp.lastUpdate, \"dd/MM/yyyy HH:mm:ss\"));\n");
      out.write("                    \n");
      out.write("                    $(\"#page-status .spinner\").remove();\n");
      out.write("                    $(\"#page-status .hidden\").removeClass(\"hidden\");\n");
      out.write("                    \n");
      out.write("                    updateSidebarHeight();\n");
      out.write("                }\n");
      out.write("            },\n");
      out.write("            error: function(jqXHR, textStatus, errorThrown) {\n");
      out.write("            \tconsole.log(\"ERROR\");\n");
      out.write("            },\n");
      out.write("            processData: false,\n");
      out.write("            dataType: 'json'\n");
      out.write("        });\n");
      out.write("\n");
      out.write("        // Page Table\n");
      out.write("        $.ajax({\n");
      out.write("            url: pageTableAction,\n");
      out.write("            cache: false,\n");
      out.write("            crossoDomain: true,\n");
      out.write("            complete: function(resp, status) {\n");
      out.write("                if (status == 'success') {\n");
      out.write("                    resp = $.parseJSON(resp.responseText);\n");
      out.write("                    drawPageTable(resp);\n");
      out.write("                    \n");
      out.write("                    $(\"#page-table .spinner\").remove();\n");
      out.write("                    $(\"#page-table .hidden\").removeClass(\"hidden\");\n");
      out.write("                    \n");
      out.write("                    updateSidebarHeight();\n");
      out.write("                }\n");
      out.write("            },\n");
      out.write("            error: function(jqXHR, textStatus, errorThrown) {\n");
      out.write("            \tconsole.log(\"ERROR\");\n");
      out.write("            },\n");
      out.write("            processData: false,\n");
      out.write("            dataType: 'json'\n");
      out.write("        });\n");
      out.write("\n");
      out.write("        // Content Table\n");
      out.write("        $.ajax({\n");
      out.write("            url: contentTableAction,\n");
      out.write("            cache: false,\n");
      out.write("            crossoDomain: true,\n");
      out.write("            complete: function(resp, status) {\n");
      out.write("                if (status == 'success') {\n");
      out.write("                    resp = $.parseJSON(resp.responseText);\n");
      out.write("                    drawContentTable(resp);\n");
      out.write("                    \n");
      out.write("                    $(\"#content-table .spinner\").remove();\n");
      out.write("                    $(\"#content-table .hidden\").removeClass(\"hidden\");\n");
      out.write("                    \n");
      out.write("                    updateSidebarHeight();\n");
      out.write("                }\n");
      out.write("            },\n");
      out.write("            error: function(jqXHR, textStatus, errorThrown) {\n");
      out.write("            \tconsole.log(\"ERROR\");\n");
      out.write("            },\n");
      out.write("            processData: false,\n");
      out.write("            dataType: 'json'\n");
      out.write("        });\n");
      out.write("        \n");
      out.write("        // Content status\n");
      out.write("        $.ajax({\n");
      out.write("            url: contentStatusAction,\n");
      out.write("            cache: false,\n");
      out.write("            crossoDomain: true,\n");
      out.write("            complete: function(resp, status) {\n");
      out.write("                if (status == 'success') {\n");
      out.write("                    resp = $.parseJSON(resp.responseText);\n");
      out.write("                    drawContentChart(resp);\n");
      out.write("\n");
      out.write("                    $(\"#content-table .spinner\").remove();\n");
      out.write("                    $(\"#content-table .hidden\").removeClass(\"hidden\");\n");
      out.write("                    \n");
      out.write("                    updateSidebarHeight();\n");
      out.write("                }\n");
      out.write("            },\n");
      out.write("            error: function(jqXHR, textStatus, errorThrown) {\n");
      out.write("                console.log(\"ERROR\");\n");
      out.write("            },\n");
      out.write("            processData: false,\n");
      out.write("            dataType: 'json'\n");
      out.write("        });\n");
      out.write("        \n");
      out.write("        $(\"#contents-donut-chart .spinner\").remove();\n");
      out.write("        \n");
      out.write("        updateSidebarHeight();\n");
      out.write("    });\n");
      out.write("    \n");
      out.write("    $(window).resize(function () {\n");
      out.write("        if ($('.sidebar-pf').length > 0) {\n");
      out.write("        \tupdateSidebarHeight();\n");
      out.write("        }\n");
      out.write("      });\n");
      out.write("\n");
      out.write("    function drawPageTable(jsonList) {\n");
      out.write("        \n");
      out.write("        for(var i=0; i < jsonList.length; i++){\n");
      out.write("            var metadata = jsonList[i].draftMetadata;\n");
      out.write("            var page = {\n");
      out.write("                'descr': metadata.titles[currentLang],\n");
      out.write("                'status': getPageStatus(jsonList[i]),\n");
      out.write("                'lastUpdate': $.format.date(metadata.updatedAt, \"dd MMMM yyyy\"),\n");
      out.write("            };\n");
      out.write("\n");
      out.write("            $('#page-table tbody').append('<tr><td>'+page.descr+'</td><td class=\"text-center\">'+\n");
      out.write("            \t\tpage.status+'</td><td class=\"text-center\">'+page.lastUpdate+'</td></tr>');\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    function drawContentChart(jsonObject) {\n");
      out.write("    \t\n");
      out.write("        var online = contentStatusMap.online+\" (\"+jsonObject.online+\")\";\n");
      out.write("        var draft = contentStatusMap.draft+\" (\"+jsonObject.draft+\")\";\n");
      out.write("        var onlineWithChanges = contentStatusMap.onlineWithChanges+\" (\"+jsonObject.onlineWithChanges+\")\";\n");
      out.write("        var total = jsonObject.total;\n");
      out.write("        var lastUpdate = $.format.date(jsonObject.lastUpdate, \"dd/MM/yyyy HH:mm:ss\");\n");
      out.write("        var chartTitle = '");
      if (_jspx_meth_s_text_3(_jspx_page_context))
        return;
      out.write("'\n");
      out.write("        \n");
      out.write("    \tvar c3ChartDefaults = $().c3ChartDefaults();\n");
      out.write("        var donutData = {\n");
      out.write("            type : 'donut',\n");
      out.write("            colors : {\n");
      out.write("            \t'online' : \"#3f9c35\",\n");
      out.write("            \t'draft' : \"#8b8d8f\",\n");
      out.write("            \t'onlineWithChanges' : \"#f0ab00\",\n");
      out.write("            },\n");
      out.write("            names: {\n");
      out.write("            \t'online':online,\n");
      out.write("            \t'draft':draft,\n");
      out.write("            \t'onlineWithChanges':onlineWithChanges,\n");
      out.write("            },\n");
      out.write("            columns : [\n");
      out.write("                    [ 'online', jsonObject.online ],\n");
      out.write("                    [ 'draft', jsonObject.draft ],\n");
      out.write("                    [ 'onlineWithChanges', jsonObject.onlineWithChanges ],\n");
      out.write("            ],\n");
      out.write("        };\n");
      out.write("\n");
      out.write("        var donutChartRightConfig = c3ChartDefaults.getDefaultDonutConfig();\n");
      out.write("        donutChartRightConfig.bindto = '#contents-donut-chart';\n");
      out.write("        donutChartRightConfig.tooltip = {\n");
      out.write("            show : false\n");
      out.write("        };\n");
      out.write("        donutChartRightConfig.data = donutData;\n");
      out.write("        donutChartRightConfig.legend = {\n");
      out.write("            show : true,\n");
      out.write("            position : 'right'\n");
      out.write("        };\n");
      out.write("        donutChartRightConfig.size = {\n");
      out.write("            width : 400,\n");
      out.write("            height : 161\n");
      out.write("        };\n");
      out.write("    \n");
      out.write("        var donutChartRightLegend = c3.generate(donutChartRightConfig);\n");
      out.write("        $().pfSetDonutChartTitle(\"#contents-donut-chart\", total, chartTitle);\n");
      out.write("        \n");
      out.write("        $(\"#lastUpdate-contents\").html(lastUpdate);\n");
      out.write("    }\n");
      out.write("    \n");
      out.write("    function drawContentTable(jsonList) {\n");
      out.write("        for(var i=0; i < jsonList.length; i++){\n");
      out.write("            var content = {\n");
      out.write("                'description': jsonList[i].description,\n");
      out.write("            \t'author': jsonList[i].author,\n");
      out.write("                'type':jsonList[i].type,\n");
      out.write("                'status': getPageStatus(jsonList[i]),\n");
      out.write("                'lastModified': $.format.date(jsonList[i].lastModified, \"dd MMMM yyyy\"),\n");
      out.write("            };\n");
      out.write("\n");
      out.write("            $('#content-table tbody').append('<tr><td>'+content.description+'</td><td>'+\n");
      out.write("           \t\tcontent.author+'</td><td>'+content.type+'</td><td class=\"text-center\">'+\n");
      out.write("           \t\tcontent.status+'</td><td class=\"text-center\">'+content.lastModified+'</td></tr>');\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    function getContentStatus(content) {\n");
      out.write("        var isOnline = content.online;\n");
      out.write("        var isChanged = content.changed;\n");
      out.write("        \n");
      out.write("        if(isOnline && !isChanged) {\n");
      out.write("            return contentStatusMap['online'];\n");
      out.write("        }\n");
      out.write("        if(isOnline && isChanged) {\n");
      out.write("            return contentStatusMap['onlineWithChanges'];\n");
      out.write("        }\n");
      out.write("        if(!isOnline) {\n");
      out.write("            return contentStatusMap['draft'];\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("    \n");
      out.write("    function getPageStatus(page) {\n");
      out.write("        var isOnline = page.online;\n");
      out.write("        var isChanged = page.changed;\n");
      out.write("        \n");
      out.write("        if(isOnline && !isChanged) {\n");
      out.write("            return pageStatusMap['online'];\n");
      out.write("        }\n");
      out.write("        if(isOnline && isChanged) {\n");
      out.write("            return pageStatusMap['onlineNotDraft'];\n");
      out.write("        }\n");
      out.write("        if(!isOnline) {\n");
      out.write("            return pageStatusMap['draft'];\n");
      out.write("        }\n");
      out.write("    }\n");
      out.write("\n");
      out.write("    function updateSidebarHeight() {\n");
      out.write("\t    $(\".sidebar-pf\").height($(\".main-column\").height());\n");
      out.write("\t    $(\".bottom-actions\").css({\"width\": \"100%\", \"padding-right\":\"20px\"});\n");
      out.write("    }\n");
      out.write("</script>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_wp_resourceURL_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_resourceURL_0 = (com.agiletec.aps.tags.ResourceURLTag) _jspx_tagPool_wp_resourceURL_nobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_resourceURL_0.setPageContext(_jspx_page_context);
    _jspx_th_wp_resourceURL_0.setParent(null);
    int _jspx_eval_wp_resourceURL_0 = _jspx_th_wp_resourceURL_0.doStartTag();
    if (_jspx_th_wp_resourceURL_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_0);
      return true;
    }
    _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_0);
    return false;
  }

  private boolean _jspx_meth_wp_resourceURL_1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_resourceURL_1 = (com.agiletec.aps.tags.ResourceURLTag) _jspx_tagPool_wp_resourceURL_nobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_resourceURL_1.setPageContext(_jspx_page_context);
    _jspx_th_wp_resourceURL_1.setParent(null);
    int _jspx_eval_wp_resourceURL_1 = _jspx_th_wp_resourceURL_1.doStartTag();
    if (_jspx_th_wp_resourceURL_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_1);
      return true;
    }
    _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_1);
    return false;
  }

  private boolean _jspx_meth_wp_resourceURL_2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_resourceURL_2 = (com.agiletec.aps.tags.ResourceURLTag) _jspx_tagPool_wp_resourceURL_nobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_resourceURL_2.setPageContext(_jspx_page_context);
    _jspx_th_wp_resourceURL_2.setParent(null);
    int _jspx_eval_wp_resourceURL_2 = _jspx_th_wp_resourceURL_2.doStartTag();
    if (_jspx_th_wp_resourceURL_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_2);
      return true;
    }
    _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_2);
    return false;
  }

  private boolean _jspx_meth_s_url_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_0 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_0.setPageContext(_jspx_page_context);
    _jspx_th_s_url_0.setParent(null);
    _jspx_th_s_url_0.setNamespace("/do/rs/Page");
    _jspx_th_s_url_0.setAction("status");
    int _jspx_eval_s_url_0 = _jspx_th_s_url_0.doStartTag();
    if (_jspx_th_s_url_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_0);
      return true;
    }
    _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_0);
    return false;
  }

  private boolean _jspx_meth_s_url_1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_1 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_1.setPageContext(_jspx_page_context);
    _jspx_th_s_url_1.setParent(null);
    _jspx_th_s_url_1.setNamespace("/do/rs/Page");
    _jspx_th_s_url_1.setAction("lastUpdated");
    int _jspx_eval_s_url_1 = _jspx_th_s_url_1.doStartTag();
    if (_jspx_th_s_url_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_1);
      return true;
    }
    _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_1);
    return false;
  }

  private boolean _jspx_meth_s_url_2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_2 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_2.setPageContext(_jspx_page_context);
    _jspx_th_s_url_2.setParent(null);
    _jspx_th_s_url_2.setNamespace("/do/jacms/rs/Content");
    _jspx_th_s_url_2.setAction("status");
    int _jspx_eval_s_url_2 = _jspx_th_s_url_2.doStartTag();
    if (_jspx_th_s_url_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_2);
      return true;
    }
    _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_2);
    return false;
  }

  private boolean _jspx_meth_s_url_3(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_3 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_3.setPageContext(_jspx_page_context);
    _jspx_th_s_url_3.setParent(null);
    _jspx_th_s_url_3.setNamespace("/do/jacms/rs/Content");
    _jspx_th_s_url_3.setAction("lastUpdated");
    int _jspx_eval_s_url_3 = _jspx_th_s_url_3.doStartTag();
    if (_jspx_th_s_url_3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_3);
      return true;
    }
    _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_3);
    return false;
  }

  private boolean _jspx_meth_s_property_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:property
    org.apache.struts2.views.jsp.PropertyTag _jspx_th_s_property_0 = (org.apache.struts2.views.jsp.PropertyTag) _jspx_tagPool_s_property_value_nobody.get(org.apache.struts2.views.jsp.PropertyTag.class);
    _jspx_th_s_property_0.setPageContext(_jspx_page_context);
    _jspx_th_s_property_0.setParent(null);
    _jspx_th_s_property_0.setValue("currentLang.code");
    int _jspx_eval_s_property_0 = _jspx_th_s_property_0.doStartTag();
    if (_jspx_th_s_property_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_property_value_nobody.reuse(_jspx_th_s_property_0);
      return true;
    }
    _jspx_tagPool_s_property_value_nobody.reuse(_jspx_th_s_property_0);
    return false;
  }

  private boolean _jspx_meth_s_text_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_0 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_0.setPageContext(_jspx_page_context);
    _jspx_th_s_text_0.setParent(null);
    _jspx_th_s_text_0.setName("dashboard.status.approved");
    int _jspx_eval_s_text_0 = _jspx_th_s_text_0.doStartTag();
    if (_jspx_th_s_text_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_0);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_0);
    return false;
  }

  private boolean _jspx_meth_s_text_1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_1 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_1.setPageContext(_jspx_page_context);
    _jspx_th_s_text_1.setParent(null);
    _jspx_th_s_text_1.setName("dashboard.status.approvedWithChanges");
    int _jspx_eval_s_text_1 = _jspx_th_s_text_1.doStartTag();
    if (_jspx_th_s_text_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_1);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_1);
    return false;
  }

  private boolean _jspx_meth_s_text_2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_2 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_2.setPageContext(_jspx_page_context);
    _jspx_th_s_text_2.setParent(null);
    _jspx_th_s_text_2.setName("dashboard.status.work");
    int _jspx_eval_s_text_2 = _jspx_th_s_text_2.doStartTag();
    if (_jspx_th_s_text_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_2);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_2);
    return false;
  }

  private boolean _jspx_meth_s_text_3(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_3 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_3.setPageContext(_jspx_page_context);
    _jspx_th_s_text_3.setParent(null);
    _jspx_th_s_text_3.setName("dashboard.contents.chartTitle");
    int _jspx_eval_s_text_3 = _jspx_th_s_text_3.doStartTag();
    if (_jspx_th_s_text_3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_3);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_3);
    return false;
  }
}

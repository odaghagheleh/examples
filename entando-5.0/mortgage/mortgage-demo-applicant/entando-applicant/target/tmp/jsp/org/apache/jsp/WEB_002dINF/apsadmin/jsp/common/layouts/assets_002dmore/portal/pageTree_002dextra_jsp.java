package org.apache.jsp.WEB_002dINF.apsadmin.jsp.common.layouts.assets_002dmore.portal;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class pageTree_002dextra_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.Vector _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_resourceURL_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_info_paramName_key_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_property_value_nobody;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _jspx_tagPool_wp_resourceURL_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_wp_info_paramName_key_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_property_value_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _jspx_tagPool_wp_resourceURL_nobody.release();
    _jspx_tagPool_wp_info_paramName_key_nobody.release();
    _jspx_tagPool_s_property_value_nobody.release();
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
      out.write("administration/js/entando.alert.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_1(_jspx_page_context))
        return;
      out.write("administration/js/jquery.xml2json.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_2(_jspx_page_context))
        return;
      out.write("administration/js/lodash.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_3(_jspx_page_context))
        return;
      out.write("administration/js/jquery-ui-dragndrop.min.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_4(_jspx_page_context))
        return;
      out.write("administration/js/jquery-confirm.min.js\"></script>\n");
      out.write("\n");
      out.write("\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("    $(document).ready(function () {\n");
      out.write("\n");
      out.write("        // Vars\n");
      out.write("        var baseUrl = '");
      if (_jspx_meth_wp_info_0(_jspx_page_context))
        return;
      out.write("',\n");
      out.write("            moveTreeURL = baseUrl+'do/rs/Page/moveTree',\n");
      out.write("            isTreeOnRequest = ");
      if (_jspx_meth_s_property_0(_jspx_page_context))
        return;
      out.write(";\n");
      out.write("\n");
      out.write("         // Objects\n");
      out.write("        var alertService = new EntandoAlert('.alert-container');\n");
      out.write("\n");
      out.write("        // jQuery selectors\n");
      out.write("        var $pageTreeRow = $('#pageTree tbody tr');\n");
      out.write("\n");
      out.write("        $(\"#expandAll\").click(function () {\n");
      out.write("            $(\"#pageTree .childrenNodes\").removeClass(\"hidden collapsed\");\n");
      out.write("            $('#pageTree .icon.fa-angle-right').removeClass('fa-angle-right')\n");
      out.write("                .addClass('fa-angle-down');\n");
      out.write("        });\n");
      out.write("        $(\"#collapseAll\").click(function () {\n");
      out.write("            $(\"#pageTree .treeRow\").addClass(\"childrenNodes\");\n");
      out.write("            $(\"#homepage\").removeClass(\"childrenNodes\");\n");
      out.write("            $(\".childrenNodes\").addClass(\"hidden collapsed\");\n");
      out.write("            $('#pageTree .icon.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');\n");
      out.write("        });\n");
      out.write("\n");
      out.write("        $(\".treeRow \").on(\"click\", function (event) {\n");
      out.write("            $(\".treeRow\").removeClass(\"active\");\n");
      out.write("            $(\".moveButtons\").addClass(\"hidden\");\n");
      out.write("            $(this).find('.subTreeToggler').prop(\"checked\", true);\n");
      out.write("            $(this).addClass(\"active\");\n");
      out.write("            $(this).find(\".moveButtons\").removeClass(\"hidden\");\n");
      out.write("        });\n");
      out.write("\n");
      out.write("        $('.table-treegrid').treegrid(null, isTreeOnRequest);\n");
      out.write("\n");
      out.write("        setDroppable($pageTreeRow);\n");
      out.write("        setDraggable($pageTreeRow);\n");
      out.write("\n");
      out.write("       /**\n");
      out.write("        * Set Draggable items \n");
      out.write("        */\n");
      out.write("        function setDraggable(selector) {\n");
      out.write("            // Set Handle icon for draggable items \n");
      out.write("            selector.find(\"td:first-child\").prepend('<span class=\"fa fa-arrows dragIcon btn-primary\"></span>');\n");
      out.write("            selector.draggable({\n");
      out.write("                opacity: 0.8,\n");
      out.write("                axis: \"y\",\n");
      out.write("                handle: \".dragIcon\",\n");
      out.write("                helper: function () {\n");
      out.write("                    return $(this).clone()\n");
      out.write("                        .addClass(\"draggableClone active\")\n");
      out.write("                        .css({width:$(this).width()});\n");
      out.write("                },\n");
      out.write("                start: function(event, ui) {\n");
      out.write("                    $(this).find(\"td:not(:first-child)\").addClass(\"hidden\");\n");
      out.write("                    $(\"thead th:not(:first-child), thead th:first-child button\").addClass(\"hidden\");\n");
      out.write("                    expandNode(\".table-treegrid .childrenNodes\");\n");
      out.write("                },\n");
      out.write("                stop: function(event, ui) {\n");
      out.write("                    $(this).find(\"td:not(:first-child)\").removeClass(\"hidden\");\n");
      out.write("                    $(\"thead th:not(:first-child), thead th:first-child button\").removeClass(\"hidden\");\n");
      out.write("                }\n");
      out.write("            });\n");
      out.write("        }\n");
      out.write("\n");
      out.write("        /**\n");
      out.write("         * Set Droppable items \n");
      out.write("         */\n");
      out.write("         function setDroppable(selector) {\n");
      out.write("            selector.droppable({\n");
      out.write("                accept: '.treeRow',\n");
      out.write("                greedy: true,\n");
      out.write("                drop: function( event, ui ) {\n");
      out.write("                    moveTree({\n");
      out.write("                        selectedNode: ui.draggable.attr(\"id\"),\n");
      out.write("                        parentPageCode: $(this).attr(\"id\")\n");
      out.write("                    });\n");
      out.write("                }\n");
      out.write("             });\n");
      out.write("        }\n");
      out.write("\n");
      out.write("        /**\n");
      out.write("         * Change parentePage for the selectedNode\n");
      out.write("         */\n");
      out.write("        function moveTree(data) {\n");
      out.write("            $.ajax(moveTreeURL, {\n");
      out.write("                dataType: 'json',\n");
      out.write("                data: data,\n");
      out.write("                success: function (response) {\n");
      out.write("                    \n");
      out.write("                    if (response.actionErrors.length > 0) {\n");
      out.write("                        alertService.showResponseAlerts({actionErrors: response.actionErrors});\n");
      out.write("                    } else {\n");
      out.write("                        updateTree(data);\n");
      out.write("                        alertService.addDismissableSuccess(response.actionMessages);\n");
      out.write("                    }\n");
      out.write("\n");
      out.write("                    $(\".alert-dismissable\").fadeOut(8000);\n");
      out.write("                    $('html, body').animate({ scrollTop: 0 }, 'fast');\n");
      out.write("                },\n");
      out.write("                error: function(jqXHR, textStatus, errorThrown) {\n");
      out.write("                    alertService.addDismissableError(\"<strong>\"+textStatus+\" \"+\n");
      out.write("                        jqXHR.status+\"</strong> \"+errorThrown);\n");
      out.write("                }\n");
      out.write("            });\n");
      out.write("        }\n");
      out.write("\n");
      out.write("        function expandNode (selector) {\n");
      out.write("            $(selector).removeClass(\"hidden collapsed\")\n");
      out.write("                .find('.icon.fa-angle-right').removeClass('fa-angle-right')\n");
      out.write("                .addClass('fa-angle-down');\n");
      out.write("        }\n");
      out.write("\n");
      out.write("        /**\n");
      out.write("         * Refresh treegrid\n");
      out.write("         */\n");
      out.write("        function updateTree(treeNodes) {\n");
      out.write("            var previousParentId = $(\"#\"+treeNodes.selectedNode).clone().data(\"parent\");\n");
      out.write("            \n");
      out.write("            $(\"#\"+treeNodes.parentPageCode).after($(\"#\"+treeNodes.selectedNode)\n");
      out.write("                .attr(\"data-parent\",\"#\"+treeNodes.parentPageCode));\n");
      out.write("\n");
      out.write("            /* indent selectedNode */\n");
      out.write("            indentNode(treeNodes.selectedNode, treeNodes.parentPageCode);\n");
      out.write("            /* update selectedNode subTree */\n");
      out.write("            sortSubtree(treeNodes.selectedNode);\n");
      out.write("            \n");
      out.write("            /* update previous parentNode */\n");
      out.write("            if($(\"[data-parent='\"+previousParentId+\"']\").length == 0) {\n");
      out.write("                $(previousParentId).find(\".expand-icon\").removeClass(\"fa-angle-down fa-angle-right\");\n");
      out.write("                $(previousParentId).find(\".node-icon\")\n");
      out.write("                  .removeClass(\"fa-folder\")\n");
      out.write("                  .addClass(\"fa-folder-o\");\n");
      out.write("            }\n");
      out.write("            /* update current parentNode */\n");
      out.write("            if($(\"[data-parent='#\"+treeNodes.parentPageCode+\"']\").length > 0) {\n");
      out.write("                $(\"#\"+treeNodes.parentPageCode).find(\".expand-icon\").addClass(\"fa-angle-down\");\n");
      out.write("                $(\"#\"+treeNodes.parentPageCode).find(\".node-icon\")\n");
      out.write("                  .addClass(\"fa-folder\")\n");
      out.write("                  .removeClass(\"fa-folder-o\");\n");
      out.write("            }\n");
      out.write("        }\n");
      out.write("\n");
      out.write("        /**\n");
      out.write("         * Update the treeNode's subTree element position recursively\n");
      out.write("         */\n");
      out.write("        function sortSubtree(treeNode) {\n");
      out.write("            var children = $(\"[data-parent='#\"+treeNode+\"']\");\n");
      out.write("            if(children.length > 0) {\n");
      out.write("                for(var i=0; i < children.length; i++) {\n");
      out.write("                    $(\"#\"+treeNode).after(children[i]);\n");
      out.write("                    indentNode($(children[i]).attr(\"id\"),treeNode);\n");
      out.write("                    sortSubtree($(children[i]).attr(\"id\"));\n");
      out.write("                }\n");
      out.write("            }\n");
      out.write("        }\n");
      out.write("\n");
      out.write("        /**\n");
      out.write("         * Update the treeNode's indentation\n");
      out.write("         */\n");
      out.write("        function indentNode(treeNode, parentNode) {\n");
      out.write("            var delta = $(\"#\"+parentNode+\" span.indent\").length - $(\"#\"+treeNode+\" span.indent\").length;\n");
      out.write("            var indentNode = $(\"#\"+treeNode);\n");
      out.write("            if(delta >= 0) {\n");
      out.write("                for(var i = 0; i <= Math.abs(delta); i++) {\n");
      out.write("                    indentNode.find(\"span.indent\").last().after('<span class=\"indent\"></span>');\n");
      out.write("                }\n");
      out.write("            } else {\n");
      out.write("                indentNode.find(\".indent:gt(\"+delta+\")\").remove();\n");
      out.write("            }\n");
      out.write("        }\n");
      out.write("});\n");
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

  private boolean _jspx_meth_wp_resourceURL_3(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_resourceURL_3 = (com.agiletec.aps.tags.ResourceURLTag) _jspx_tagPool_wp_resourceURL_nobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_resourceURL_3.setPageContext(_jspx_page_context);
    _jspx_th_wp_resourceURL_3.setParent(null);
    int _jspx_eval_wp_resourceURL_3 = _jspx_th_wp_resourceURL_3.doStartTag();
    if (_jspx_th_wp_resourceURL_3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_3);
      return true;
    }
    _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_3);
    return false;
  }

  private boolean _jspx_meth_wp_resourceURL_4(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_resourceURL_4 = (com.agiletec.aps.tags.ResourceURLTag) _jspx_tagPool_wp_resourceURL_nobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_resourceURL_4.setPageContext(_jspx_page_context);
    _jspx_th_wp_resourceURL_4.setParent(null);
    int _jspx_eval_wp_resourceURL_4 = _jspx_th_wp_resourceURL_4.doStartTag();
    if (_jspx_th_wp_resourceURL_4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_4);
      return true;
    }
    _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_4);
    return false;
  }

  private boolean _jspx_meth_wp_info_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_info_0 = (com.agiletec.aps.tags.InfoTag) _jspx_tagPool_wp_info_paramName_key_nobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_info_0.setPageContext(_jspx_page_context);
    _jspx_th_wp_info_0.setParent(null);
    _jspx_th_wp_info_0.setKey("systemParam");
    _jspx_th_wp_info_0.setParamName("applicationBaseURL");
    int _jspx_eval_wp_info_0 = _jspx_th_wp_info_0.doStartTag();
    if (_jspx_th_wp_info_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_info_paramName_key_nobody.reuse(_jspx_th_wp_info_0);
      return true;
    }
    _jspx_tagPool_wp_info_paramName_key_nobody.reuse(_jspx_th_wp_info_0);
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
    _jspx_th_s_property_0.setValue("#pageTreeStyleVar == 'request'");
    int _jspx_eval_s_property_0 = _jspx_th_s_property_0.doStartTag();
    if (_jspx_th_s_property_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_property_value_nobody.reuse(_jspx_th_s_property_0);
      return true;
    }
    _jspx_tagPool_s_property_value_nobody.reuse(_jspx_th_s_property_0);
    return false;
  }
}

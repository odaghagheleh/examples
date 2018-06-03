package org.apache.jsp.WEB_002dINF.apsadmin.jsp.common.template;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class dashboard_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.Vector _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_fmt_formatDate_var_value_pattern_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_set_var_value_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_text_name_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_property_value_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_ifauthorized_permission;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_url_var_namespace_action_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wpsa_hookPoint_objectName_key;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_iterator_var_value;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wpsa_include_value_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_ifauthorized_var_permission_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_c_if_test;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_s_url_namespace_action_nobody;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _jspx_tagPool_fmt_formatDate_var_value_pattern_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_set_var_value_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_text_name_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_property_value_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_wp_ifauthorized_permission = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_url_var_namespace_action_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_wpsa_hookPoint_objectName_key = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_iterator_var_value = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_wpsa_include_value_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_wp_ifauthorized_var_permission_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_c_if_test = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_s_url_namespace_action_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _jspx_tagPool_fmt_formatDate_var_value_pattern_nobody.release();
    _jspx_tagPool_s_set_var_value_nobody.release();
    _jspx_tagPool_s_text_name_nobody.release();
    _jspx_tagPool_s_property_value_nobody.release();
    _jspx_tagPool_wp_ifauthorized_permission.release();
    _jspx_tagPool_s_url_var_namespace_action_nobody.release();
    _jspx_tagPool_wpsa_hookPoint_objectName_key.release();
    _jspx_tagPool_s_iterator_var_value.release();
    _jspx_tagPool_wpsa_include_value_nobody.release();
    _jspx_tagPool_wp_ifauthorized_var_permission_nobody.release();
    _jspx_tagPool_c_if_test.release();
    _jspx_tagPool_s_url_namespace_action_nobody.release();
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

      java.util.Date now = null;
      synchronized (_jspx_page_context) {
        now = (java.util.Date) _jspx_page_context.getAttribute("now", PageContext.PAGE_SCOPE);
        if (now == null){
          now = new java.util.Date();
          _jspx_page_context.setAttribute("now", now, PageContext.PAGE_SCOPE);
        }
      }
      if (_jspx_meth_fmt_formatDate_0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- Admin console Breadcrumbs -->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- Page Title -->\r\n");
      if (_jspx_meth_s_set_0(_jspx_page_context))
        return;
      if (_jspx_meth_s_set_1(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("<h1 class=\"page-title-container\">\r\n");
      out.write("    ");
      if (_jspx_meth_s_text_0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("    <span class=\"pull-right\">\r\n");
      out.write("        <span class=\"date mr-20\">");
      if (_jspx_meth_s_property_0(_jspx_page_context))
        return;
      out.write("</span>\r\n");
      out.write("    </span>\r\n");
      out.write("</h1>\r\n");
      out.write("\r\n");
      out.write("<!-- Default separator -->\r\n");
      out.write("<div class=\"form-group-separator\"></div>\r\n");
      out.write("\r\n");
      out.write("<div id=\"main\" role=\"main\" class=\"dashboard mt-20\">\r\n");
      out.write("    <div class=\"container-fluid\">\r\n");
      out.write("        <div class=\"row\">\r\n");
      out.write("            <div class=\"col-md-8 col-lg-9 main-column\">\r\n");
      out.write("                <div class=\"cards-pf\">\r\n");
      out.write("                    <div class=\"container-fluid container-cards-pf no-mt\">\r\n");
      out.write("                        <div class=\"row row-cards-pf\">\r\n");
      out.write("\r\n");
      out.write("                            <!-- Pages -->\r\n");
      out.write("                            <div class=\"col-xs-12 col-lg-4\">\r\n");
      out.write("                                <div class=\"card-pf card-pf-accented card-pf-aggregate-status\">\r\n");
      out.write("                                    <h2 class=\"card-pf-title no-mb text-left bold\">\r\n");
      out.write("                                        ");
      if (_jspx_meth_s_text_1(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                                    </h2>\r\n");
      out.write("                                    <div class=\"text-left\"><span id=\"lastUpdate-pages\"></span></div>\r\n");
      out.write("                                    <div class=\"card-pf-body\" id=\"page-status\">\r\n");
      out.write("                                        <div class=\"spinner spinner-xl\"></div>\r\n");
      out.write("                                        <ul class=\"mt-10 text-left ml-20 pt-20 hidden\">\r\n");
      out.write("                                            <li>\r\n");
      out.write("                                                <span class=\"fa fa-circle green mr-10\"></span>\r\n");
      out.write("                                                <span class=\"card-pf-aggregate-status-count\">\r\n");
      out.write("                                                    <span id=\"online-pages\"></span>\r\n");
      out.write("                                                    ");
      if (_jspx_meth_s_text_2(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                                                </span>\r\n");
      out.write("                                            </li>\r\n");
      out.write("                                            <li>\r\n");
      out.write("                                                <span class=\"fa fa-circle yellow mr-10\"></span>\r\n");
      out.write("                                                <span class=\"card-pf-aggregate-status-count\">\r\n");
      out.write("                                                    <span id=\"onlineWithChanges-pages\"></span>\r\n");
      out.write("                                                    ");
      if (_jspx_meth_s_text_3(_jspx_page_context))
        return;
      out.write("&#32;&ne;&#32;\r\n");
      out.write("                                                    ");
      if (_jspx_meth_s_text_4(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                                                </span>\r\n");
      out.write("                                            </li>\r\n");
      out.write("                                            <li>\r\n");
      out.write("                                                <span class=\"fa fa-circle gray mr-10\"></span>\r\n");
      out.write("                                                <span class=\"card-pf-aggregate-status-count\">\r\n");
      out.write("                                                    <span id=\"draft-pages\"></span> ");
      if (_jspx_meth_s_text_5(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                                                </span>\r\n");
      out.write("                                            </li>\r\n");
      out.write("                                        </ul>\r\n");
      out.write("                                    </div>\r\n");
      out.write("                                    ");
      if (_jspx_meth_wp_ifauthorized_0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                                </div>\r\n");
      out.write("                            </div>\r\n");
      out.write("                            \r\n");
      out.write("                            ");
      if (_jspx_meth_wpsa_hookPoint_0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                            \r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("\r\n");
      out.write("                <!-- Page table -->\r\n");
      out.write("                <div class=\"row\">\r\n");
      out.write("                    <div class=\"container-fluid container-cards-pf\">\r\n");
      out.write("                        <div class=\"row row-cards-pf\">\r\n");
      out.write("                            <div class=\"col-xs-12\">\r\n");
      out.write("                                <div class=\"card-pf card-pf-utilization\">\r\n");
      out.write("                                    <div class=\"card-pf-heading\">\r\n");
      out.write("                                        <p class=\"card-pf-heading-details\">\r\n");
      out.write("                                            ");
      if (_jspx_meth_wp_ifauthorized_1(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                                        <h2 class=\"card-pf-title\">\r\n");
      out.write("                                            ");
      if (_jspx_meth_s_text_11(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                                        </h2>\r\n");
      out.write("                                    </div>\r\n");
      out.write("                                    <div class=\"card-pf-body\" id=\"page-table\">\r\n");
      out.write("                                        <div class=\"spinner spinner-xl\"></div>\r\n");
      out.write("                                        <div class=\"table-responsive hidden\">\r\n");
      out.write("                                            <table id=\"page-table\" class=\"table table-striped table-bordered no-mb\">\r\n");
      out.write("                                                <thead>\r\n");
      out.write("                                                    <tr>\r\n");
      out.write("                                                        <th>");
      if (_jspx_meth_s_text_12(_jspx_page_context))
        return;
      out.write("</th>\r\n");
      out.write("                                                        <th class=\"text-center table-w-10\">");
      if (_jspx_meth_s_text_13(_jspx_page_context))
        return;
      out.write("</th>\r\n");
      out.write("                                                        <th class=\"text-center w20perc\">");
      if (_jspx_meth_s_text_14(_jspx_page_context))
        return;
      out.write("</th>\r\n");
      out.write("                                                    </tr>\r\n");
      out.write("                                                </thead>\r\n");
      out.write("                                                <tbody>\r\n");
      out.write("                                                </tbody>\r\n");
      out.write("                                            </table>\r\n");
      out.write("                                        </div>\r\n");
      out.write("                                    </div>\r\n");
      out.write("                                    ");
      if (_jspx_meth_wp_ifauthorized_2(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                                </div>\r\n");
      out.write("\r\n");
      out.write("                            </div>\r\n");
      out.write("                        </div>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("                \r\n");
      out.write("                ");
      if (_jspx_meth_wpsa_hookPoint_1(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                \r\n");
      out.write("            </div>\r\n");
      out.write("\r\n");
      out.write("            <!-- Right Column -->\r\n");
      out.write("            <div class=\"col-md-4 col-lg-3 sidebar-pf sidebar-pf-right\">\r\n");
      out.write("                <div class=\"card-pf mt-20\">\r\n");
      out.write("                    <h2 class=\"card-pf-title bold no-mb mt-10\">\r\n");
      out.write("                        ");
      if (_jspx_meth_s_text_18(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                        <span class=\"fa fs-20 fa-cog pull-right\"></span>\r\n");
      out.write("                    </h2>\r\n");
      out.write("                    <div class=\"card-pf-body\">\r\n");
      out.write("                        <ul class=\"pt-20 pb-20 pl-10\">\r\n");
      out.write("                            ");
      if (_jspx_meth_wp_ifauthorized_3(_jspx_page_context))
        return;
      if (_jspx_meth_wp_ifauthorized_4(_jspx_page_context))
        return;
      if (_jspx_meth_wp_ifauthorized_5(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                            <li>\r\n");
      out.write("                                ");
      if (_jspx_meth_c_if_0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                            </li>\r\n");
      out.write("                            <li>\r\n");
      out.write("                                ");
      if (_jspx_meth_wp_ifauthorized_6(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                            </li>\r\n");
      out.write("                            <li>\r\n");
      out.write("                                ");
      if (_jspx_meth_wp_ifauthorized_7(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                            </li>\r\n");
      out.write("                            <li>\r\n");
      out.write("                                ");
      if (_jspx_meth_wp_ifauthorized_8(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                            </li>\r\n");
      out.write("                        </ul>\r\n");
      out.write("                    </div>\r\n");
      out.write("                </div>\r\n");
      out.write("                <div class=\"bottom-actions\">\r\n");
      out.write("                    \r\n");
      out.write("                    ");
      if (_jspx_meth_wp_ifauthorized_9(_jspx_page_context))
        return;
      if (_jspx_meth_wpsa_hookPoint_2(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("                    \r\n");
      out.write("                </div>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
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

  private boolean _jspx_meth_fmt_formatDate_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  fmt:formatDate
    org.apache.taglibs.standard.tag.rt.fmt.FormatDateTag _jspx_th_fmt_formatDate_0 = (org.apache.taglibs.standard.tag.rt.fmt.FormatDateTag) _jspx_tagPool_fmt_formatDate_var_value_pattern_nobody.get(org.apache.taglibs.standard.tag.rt.fmt.FormatDateTag.class);
    _jspx_th_fmt_formatDate_0.setPageContext(_jspx_page_context);
    _jspx_th_fmt_formatDate_0.setParent(null);
    _jspx_th_fmt_formatDate_0.setValue((java.util.Date) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${now}", java.util.Date.class, (PageContext)_jspx_page_context, null));
    _jspx_th_fmt_formatDate_0.setPattern("EEEE, dd MMMM yyyy");
    _jspx_th_fmt_formatDate_0.setVar("currentDate");
    int _jspx_eval_fmt_formatDate_0 = _jspx_th_fmt_formatDate_0.doStartTag();
    if (_jspx_th_fmt_formatDate_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_fmt_formatDate_var_value_pattern_nobody.reuse(_jspx_th_fmt_formatDate_0);
      return true;
    }
    _jspx_tagPool_fmt_formatDate_var_value_pattern_nobody.reuse(_jspx_th_fmt_formatDate_0);
    return false;
  }

  private boolean _jspx_meth_s_set_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:set
    org.apache.struts2.views.jsp.SetTag _jspx_th_s_set_0 = (org.apache.struts2.views.jsp.SetTag) _jspx_tagPool_s_set_var_value_nobody.get(org.apache.struts2.views.jsp.SetTag.class);
    _jspx_th_s_set_0.setPageContext(_jspx_page_context);
    _jspx_th_s_set_0.setParent(null);
    _jspx_th_s_set_0.setVar("dataContent");
    _jspx_th_s_set_0.setValue("%{'help block'}");
    int _jspx_eval_s_set_0 = _jspx_th_s_set_0.doStartTag();
    if (_jspx_th_s_set_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_set_var_value_nobody.reuse(_jspx_th_s_set_0);
      return true;
    }
    _jspx_tagPool_s_set_var_value_nobody.reuse(_jspx_th_s_set_0);
    return false;
  }

  private boolean _jspx_meth_s_set_1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:set
    org.apache.struts2.views.jsp.SetTag _jspx_th_s_set_1 = (org.apache.struts2.views.jsp.SetTag) _jspx_tagPool_s_set_var_value_nobody.get(org.apache.struts2.views.jsp.SetTag.class);
    _jspx_th_s_set_1.setPageContext(_jspx_page_context);
    _jspx_th_s_set_1.setParent(null);
    _jspx_th_s_set_1.setVar("dataOriginalTitle");
    _jspx_th_s_set_1.setValue("%{'Section Help'}");
    int _jspx_eval_s_set_1 = _jspx_th_s_set_1.doStartTag();
    if (_jspx_th_s_set_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_set_var_value_nobody.reuse(_jspx_th_s_set_1);
      return true;
    }
    _jspx_tagPool_s_set_var_value_nobody.reuse(_jspx_th_s_set_1);
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
    _jspx_th_s_text_0.setName("title.dashboard");
    int _jspx_eval_s_text_0 = _jspx_th_s_text_0.doStartTag();
    if (_jspx_th_s_text_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_0);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_0);
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
    _jspx_th_s_property_0.setValue("#attr.currentDate");
    int _jspx_eval_s_property_0 = _jspx_th_s_property_0.doStartTag();
    if (_jspx_th_s_property_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_property_value_nobody.reuse(_jspx_th_s_property_0);
      return true;
    }
    _jspx_tagPool_s_property_value_nobody.reuse(_jspx_th_s_property_0);
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
    _jspx_th_s_text_1.setName("dashboard.pageStatus");
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
    _jspx_th_s_text_2.setName("dashboard.pages.online");
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
    _jspx_th_s_text_3.setName("dashboard.pages.online");
    int _jspx_eval_s_text_3 = _jspx_th_s_text_3.doStartTag();
    if (_jspx_th_s_text_3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_3);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_3);
    return false;
  }

  private boolean _jspx_meth_s_text_4(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_4 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_4.setPageContext(_jspx_page_context);
    _jspx_th_s_text_4.setParent(null);
    _jspx_th_s_text_4.setName("dashboard.pages.draft");
    int _jspx_eval_s_text_4 = _jspx_th_s_text_4.doStartTag();
    if (_jspx_th_s_text_4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_4);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_4);
    return false;
  }

  private boolean _jspx_meth_s_text_5(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_5 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_5.setPageContext(_jspx_page_context);
    _jspx_th_s_text_5.setParent(null);
    _jspx_th_s_text_5.setName("dashboard.pages.draft");
    int _jspx_eval_s_text_5 = _jspx_th_s_text_5.doStartTag();
    if (_jspx_th_s_text_5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_5);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_5);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_0 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_permission.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_0.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_0.setParent(null);
    _jspx_th_wp_ifauthorized_0.setPermission("managePages");
    int _jspx_eval_wp_ifauthorized_0 = _jspx_th_wp_ifauthorized_0.doStartTag();
    if (_jspx_eval_wp_ifauthorized_0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        if (_jspx_meth_s_url_0((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                        <a href=\"");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${pageListURL}", java.lang.String.class, (PageContext)_jspx_page_context, null));
        out.write("\" class=\"bottom-link display-block text-right\"\r\n");
        out.write("                                           title=\"");
        if (_jspx_meth_s_text_6((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write(':');
        out.write(' ');
        if (_jspx_meth_s_text_7((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write("\">\r\n");
        out.write("                                            ");
        if (_jspx_meth_s_text_8((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                        </a>\r\n");
        out.write("                                    ");
        int evalDoAfterBody = _jspx_th_wp_ifauthorized_0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_wp_ifauthorized_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_0);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_0);
    return false;
  }

  private boolean _jspx_meth_s_url_0(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_0 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_var_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_0.setPageContext(_jspx_page_context);
    _jspx_th_s_url_0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
    _jspx_th_s_url_0.setNamespace("/do/Page");
    _jspx_th_s_url_0.setAction("viewTree");
    _jspx_th_s_url_0.setVar("pageListURL");
    int _jspx_eval_s_url_0 = _jspx_th_s_url_0.doStartTag();
    if (_jspx_th_s_url_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_var_namespace_action_nobody.reuse(_jspx_th_s_url_0);
      return true;
    }
    _jspx_tagPool_s_url_var_namespace_action_nobody.reuse(_jspx_th_s_url_0);
    return false;
  }

  private boolean _jspx_meth_s_text_6(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_6 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_6.setPageContext(_jspx_page_context);
    _jspx_th_s_text_6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
    _jspx_th_s_text_6.setName("note.goToSomewhere");
    int _jspx_eval_s_text_6 = _jspx_th_s_text_6.doStartTag();
    if (_jspx_th_s_text_6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_6);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_6);
    return false;
  }

  private boolean _jspx_meth_s_text_7(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_7 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_7.setPageContext(_jspx_page_context);
    _jspx_th_s_text_7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
    _jspx_th_s_text_7.setName("dashboard.pages.pageList");
    int _jspx_eval_s_text_7 = _jspx_th_s_text_7.doStartTag();
    if (_jspx_th_s_text_7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_7);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_7);
    return false;
  }

  private boolean _jspx_meth_s_text_8(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_8 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_8.setPageContext(_jspx_page_context);
    _jspx_th_s_text_8.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
    _jspx_th_s_text_8.setName("dashboard.pages.pageList");
    int _jspx_eval_s_text_8 = _jspx_th_s_text_8.doStartTag();
    if (_jspx_th_s_text_8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_8);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_8);
    return false;
  }

  private boolean _jspx_meth_wpsa_hookPoint_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wpsa:hookPoint
    com.agiletec.apsadmin.tags.HookPointTag _jspx_th_wpsa_hookPoint_0 = (com.agiletec.apsadmin.tags.HookPointTag) _jspx_tagPool_wpsa_hookPoint_objectName_key.get(com.agiletec.apsadmin.tags.HookPointTag.class);
    _jspx_th_wpsa_hookPoint_0.setPageContext(_jspx_page_context);
    _jspx_th_wpsa_hookPoint_0.setParent(null);
    _jspx_th_wpsa_hookPoint_0.setKey("core.dashboard.status");
    _jspx_th_wpsa_hookPoint_0.setObjectName("hookPointElements_core_dashboard_status");
    int _jspx_eval_wpsa_hookPoint_0 = _jspx_th_wpsa_hookPoint_0.doStartTag();
    if (_jspx_eval_wpsa_hookPoint_0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_wpsa_hookPoint_0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_wpsa_hookPoint_0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_wpsa_hookPoint_0.doInitBody();
      }
      do {
        if (_jspx_meth_s_iterator_0((javax.servlet.jsp.tagext.JspTag) _jspx_th_wpsa_hookPoint_0, _jspx_page_context))
          return true;
        int evalDoAfterBody = _jspx_th_wpsa_hookPoint_0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_wpsa_hookPoint_0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE)
        out = _jspx_page_context.popBody();
    }
    if (_jspx_th_wpsa_hookPoint_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wpsa_hookPoint_objectName_key.reuse(_jspx_th_wpsa_hookPoint_0);
      return true;
    }
    _jspx_tagPool_wpsa_hookPoint_objectName_key.reuse(_jspx_th_wpsa_hookPoint_0);
    return false;
  }

  private boolean _jspx_meth_s_iterator_0(javax.servlet.jsp.tagext.JspTag _jspx_th_wpsa_hookPoint_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:iterator
    org.apache.struts2.views.jsp.IteratorTag _jspx_th_s_iterator_0 = (org.apache.struts2.views.jsp.IteratorTag) _jspx_tagPool_s_iterator_var_value.get(org.apache.struts2.views.jsp.IteratorTag.class);
    _jspx_th_s_iterator_0.setPageContext(_jspx_page_context);
    _jspx_th_s_iterator_0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wpsa_hookPoint_0);
    _jspx_th_s_iterator_0.setValue("#hookPointElements_core_dashboard_status");
    _jspx_th_s_iterator_0.setVar("hookPointElement");
    int _jspx_eval_s_iterator_0 = _jspx_th_s_iterator_0.doStartTag();
    if (_jspx_eval_s_iterator_0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_s_iterator_0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_s_iterator_0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_s_iterator_0.doInitBody();
      }
      do {
        if (_jspx_meth_wpsa_include_0((javax.servlet.jsp.tagext.JspTag) _jspx_th_s_iterator_0, _jspx_page_context))
          return true;
        int evalDoAfterBody = _jspx_th_s_iterator_0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_s_iterator_0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE)
        out = _jspx_page_context.popBody();
    }
    if (_jspx_th_s_iterator_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_iterator_var_value.reuse(_jspx_th_s_iterator_0);
      return true;
    }
    _jspx_tagPool_s_iterator_var_value.reuse(_jspx_th_s_iterator_0);
    return false;
  }

  private boolean _jspx_meth_wpsa_include_0(javax.servlet.jsp.tagext.JspTag _jspx_th_s_iterator_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wpsa:include
    org.apache.struts2.views.jsp.IncludeTag _jspx_th_wpsa_include_0 = (org.apache.struts2.views.jsp.IncludeTag) _jspx_tagPool_wpsa_include_value_nobody.get(org.apache.struts2.views.jsp.IncludeTag.class);
    _jspx_th_wpsa_include_0.setPageContext(_jspx_page_context);
    _jspx_th_wpsa_include_0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_s_iterator_0);
    _jspx_th_wpsa_include_0.setValue("%{#hookPointElement.filePath}");
    int _jspx_eval_wpsa_include_0 = _jspx_th_wpsa_include_0.doStartTag();
    if (_jspx_th_wpsa_include_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wpsa_include_value_nobody.reuse(_jspx_th_wpsa_include_0);
      return true;
    }
    _jspx_tagPool_wpsa_include_value_nobody.reuse(_jspx_th_wpsa_include_0);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_1 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_permission.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_1.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_1.setParent(null);
    _jspx_th_wp_ifauthorized_1.setPermission("managePages");
    int _jspx_eval_wp_ifauthorized_1 = _jspx_th_wp_ifauthorized_1.doStartTag();
    if (_jspx_eval_wp_ifauthorized_1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        if (_jspx_meth_s_url_1((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_1, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                                <a href=\"");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${addPageURL}", java.lang.String.class, (PageContext)_jspx_page_context, null));
        out.write("\" class=\"btn btn-primary\" title=\"");
        if (_jspx_meth_s_text_9((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_1, _jspx_page_context))
          return true;
        out.write("\">\r\n");
        out.write("                                                    ");
        if (_jspx_meth_s_text_10((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_1, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                                </a>\r\n");
        out.write("                                            ");
        int evalDoAfterBody = _jspx_th_wp_ifauthorized_1.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_wp_ifauthorized_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_1);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_1);
    return false;
  }

  private boolean _jspx_meth_s_url_1(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_1 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_var_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_1.setPageContext(_jspx_page_context);
    _jspx_th_s_url_1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_1);
    _jspx_th_s_url_1.setNamespace("/do/Page");
    _jspx_th_s_url_1.setAction("new");
    _jspx_th_s_url_1.setVar("addPageURL");
    int _jspx_eval_s_url_1 = _jspx_th_s_url_1.doStartTag();
    if (_jspx_th_s_url_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_var_namespace_action_nobody.reuse(_jspx_th_s_url_1);
      return true;
    }
    _jspx_tagPool_s_url_var_namespace_action_nobody.reuse(_jspx_th_s_url_1);
    return false;
  }

  private boolean _jspx_meth_s_text_9(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_9 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_9.setPageContext(_jspx_page_context);
    _jspx_th_s_text_9.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_1);
    _jspx_th_s_text_9.setName("dashboard.addPage");
    int _jspx_eval_s_text_9 = _jspx_th_s_text_9.doStartTag();
    if (_jspx_th_s_text_9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_9);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_9);
    return false;
  }

  private boolean _jspx_meth_s_text_10(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_10 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_10.setPageContext(_jspx_page_context);
    _jspx_th_s_text_10.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_1);
    _jspx_th_s_text_10.setName("label.add");
    int _jspx_eval_s_text_10 = _jspx_th_s_text_10.doStartTag();
    if (_jspx_th_s_text_10.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_10);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_10);
    return false;
  }

  private boolean _jspx_meth_s_text_11(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_11 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_11.setPageContext(_jspx_page_context);
    _jspx_th_s_text_11.setParent(null);
    _jspx_th_s_text_11.setName("dashboard.pageList");
    int _jspx_eval_s_text_11 = _jspx_th_s_text_11.doStartTag();
    if (_jspx_th_s_text_11.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_11);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_11);
    return false;
  }

  private boolean _jspx_meth_s_text_12(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_12 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_12.setPageContext(_jspx_page_context);
    _jspx_th_s_text_12.setParent(null);
    _jspx_th_s_text_12.setName("dashboard.pages.description");
    int _jspx_eval_s_text_12 = _jspx_th_s_text_12.doStartTag();
    if (_jspx_th_s_text_12.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_12);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_12);
    return false;
  }

  private boolean _jspx_meth_s_text_13(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_13 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_13.setPageContext(_jspx_page_context);
    _jspx_th_s_text_13.setParent(null);
    _jspx_th_s_text_13.setName("dashboard.pages.status");
    int _jspx_eval_s_text_13 = _jspx_th_s_text_13.doStartTag();
    if (_jspx_th_s_text_13.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_13);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_13);
    return false;
  }

  private boolean _jspx_meth_s_text_14(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_14 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_14.setPageContext(_jspx_page_context);
    _jspx_th_s_text_14.setParent(null);
    _jspx_th_s_text_14.setName("dashboard.pages.lastModified");
    int _jspx_eval_s_text_14 = _jspx_th_s_text_14.doStartTag();
    if (_jspx_th_s_text_14.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_14);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_14);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_2 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_permission.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_2.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_2.setParent(null);
    _jspx_th_wp_ifauthorized_2.setPermission("managePages");
    int _jspx_eval_wp_ifauthorized_2 = _jspx_th_wp_ifauthorized_2.doStartTag();
    if (_jspx_eval_wp_ifauthorized_2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        if (_jspx_meth_s_url_2((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_2, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                        <a href=\"");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${pageListURL}", java.lang.String.class, (PageContext)_jspx_page_context, null));
        out.write("\" class=\"bottom-link display-block text-right\"\r\n");
        out.write("                                           title=\"");
        if (_jspx_meth_s_text_15((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_2, _jspx_page_context))
          return true;
        out.write(':');
        out.write(' ');
        if (_jspx_meth_s_text_16((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_2, _jspx_page_context))
          return true;
        out.write("\">\r\n");
        out.write("                                            ");
        if (_jspx_meth_s_text_17((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_2, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                        </a>\r\n");
        out.write("                                    ");
        int evalDoAfterBody = _jspx_th_wp_ifauthorized_2.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_wp_ifauthorized_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_2);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_2);
    return false;
  }

  private boolean _jspx_meth_s_url_2(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_2 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_var_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_2.setPageContext(_jspx_page_context);
    _jspx_th_s_url_2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_2);
    _jspx_th_s_url_2.setNamespace("/do/Page");
    _jspx_th_s_url_2.setAction("viewTree");
    _jspx_th_s_url_2.setVar("pageListURL");
    int _jspx_eval_s_url_2 = _jspx_th_s_url_2.doStartTag();
    if (_jspx_th_s_url_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_var_namespace_action_nobody.reuse(_jspx_th_s_url_2);
      return true;
    }
    _jspx_tagPool_s_url_var_namespace_action_nobody.reuse(_jspx_th_s_url_2);
    return false;
  }

  private boolean _jspx_meth_s_text_15(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_15 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_15.setPageContext(_jspx_page_context);
    _jspx_th_s_text_15.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_2);
    _jspx_th_s_text_15.setName("note.goToSomewhere");
    int _jspx_eval_s_text_15 = _jspx_th_s_text_15.doStartTag();
    if (_jspx_th_s_text_15.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_15);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_15);
    return false;
  }

  private boolean _jspx_meth_s_text_16(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_16 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_16.setPageContext(_jspx_page_context);
    _jspx_th_s_text_16.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_2);
    _jspx_th_s_text_16.setName("dashboard.pageList");
    int _jspx_eval_s_text_16 = _jspx_th_s_text_16.doStartTag();
    if (_jspx_th_s_text_16.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_16);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_16);
    return false;
  }

  private boolean _jspx_meth_s_text_17(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_17 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_17.setPageContext(_jspx_page_context);
    _jspx_th_s_text_17.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_2);
    _jspx_th_s_text_17.setName("dashboard.pageList");
    int _jspx_eval_s_text_17 = _jspx_th_s_text_17.doStartTag();
    if (_jspx_th_s_text_17.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_17);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_17);
    return false;
  }

  private boolean _jspx_meth_wpsa_hookPoint_1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wpsa:hookPoint
    com.agiletec.apsadmin.tags.HookPointTag _jspx_th_wpsa_hookPoint_1 = (com.agiletec.apsadmin.tags.HookPointTag) _jspx_tagPool_wpsa_hookPoint_objectName_key.get(com.agiletec.apsadmin.tags.HookPointTag.class);
    _jspx_th_wpsa_hookPoint_1.setPageContext(_jspx_page_context);
    _jspx_th_wpsa_hookPoint_1.setParent(null);
    _jspx_th_wpsa_hookPoint_1.setKey("core.dashboard.tables");
    _jspx_th_wpsa_hookPoint_1.setObjectName("hookPointElements_core_dashboard_tables");
    int _jspx_eval_wpsa_hookPoint_1 = _jspx_th_wpsa_hookPoint_1.doStartTag();
    if (_jspx_eval_wpsa_hookPoint_1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_wpsa_hookPoint_1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_wpsa_hookPoint_1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_wpsa_hookPoint_1.doInitBody();
      }
      do {
        if (_jspx_meth_s_iterator_1((javax.servlet.jsp.tagext.JspTag) _jspx_th_wpsa_hookPoint_1, _jspx_page_context))
          return true;
        int evalDoAfterBody = _jspx_th_wpsa_hookPoint_1.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_wpsa_hookPoint_1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE)
        out = _jspx_page_context.popBody();
    }
    if (_jspx_th_wpsa_hookPoint_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wpsa_hookPoint_objectName_key.reuse(_jspx_th_wpsa_hookPoint_1);
      return true;
    }
    _jspx_tagPool_wpsa_hookPoint_objectName_key.reuse(_jspx_th_wpsa_hookPoint_1);
    return false;
  }

  private boolean _jspx_meth_s_iterator_1(javax.servlet.jsp.tagext.JspTag _jspx_th_wpsa_hookPoint_1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:iterator
    org.apache.struts2.views.jsp.IteratorTag _jspx_th_s_iterator_1 = (org.apache.struts2.views.jsp.IteratorTag) _jspx_tagPool_s_iterator_var_value.get(org.apache.struts2.views.jsp.IteratorTag.class);
    _jspx_th_s_iterator_1.setPageContext(_jspx_page_context);
    _jspx_th_s_iterator_1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wpsa_hookPoint_1);
    _jspx_th_s_iterator_1.setValue("#hookPointElements_core_dashboard_tables");
    _jspx_th_s_iterator_1.setVar("hookPointElement");
    int _jspx_eval_s_iterator_1 = _jspx_th_s_iterator_1.doStartTag();
    if (_jspx_eval_s_iterator_1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_s_iterator_1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_s_iterator_1.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_s_iterator_1.doInitBody();
      }
      do {
        if (_jspx_meth_wpsa_include_1((javax.servlet.jsp.tagext.JspTag) _jspx_th_s_iterator_1, _jspx_page_context))
          return true;
        int evalDoAfterBody = _jspx_th_s_iterator_1.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_s_iterator_1 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE)
        out = _jspx_page_context.popBody();
    }
    if (_jspx_th_s_iterator_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_iterator_var_value.reuse(_jspx_th_s_iterator_1);
      return true;
    }
    _jspx_tagPool_s_iterator_var_value.reuse(_jspx_th_s_iterator_1);
    return false;
  }

  private boolean _jspx_meth_wpsa_include_1(javax.servlet.jsp.tagext.JspTag _jspx_th_s_iterator_1, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wpsa:include
    org.apache.struts2.views.jsp.IncludeTag _jspx_th_wpsa_include_1 = (org.apache.struts2.views.jsp.IncludeTag) _jspx_tagPool_wpsa_include_value_nobody.get(org.apache.struts2.views.jsp.IncludeTag.class);
    _jspx_th_wpsa_include_1.setPageContext(_jspx_page_context);
    _jspx_th_wpsa_include_1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_s_iterator_1);
    _jspx_th_wpsa_include_1.setValue("%{#hookPointElement.filePath}");
    int _jspx_eval_wpsa_include_1 = _jspx_th_wpsa_include_1.doStartTag();
    if (_jspx_th_wpsa_include_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wpsa_include_value_nobody.reuse(_jspx_th_wpsa_include_1);
      return true;
    }
    _jspx_tagPool_wpsa_include_value_nobody.reuse(_jspx_th_wpsa_include_1);
    return false;
  }

  private boolean _jspx_meth_s_text_18(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_18 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_18.setPageContext(_jspx_page_context);
    _jspx_th_s_text_18.setParent(null);
    _jspx_th_s_text_18.setName("dashboard.fastSettings");
    int _jspx_eval_s_text_18 = _jspx_th_s_text_18.doStartTag();
    if (_jspx_th_s_text_18.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_18);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_18);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_3(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_3 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_var_permission_nobody.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_3.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_3.setParent(null);
    _jspx_th_wp_ifauthorized_3.setPermission("viewUsers");
    _jspx_th_wp_ifauthorized_3.setVar("viewUsersPermVar");
    int _jspx_eval_wp_ifauthorized_3 = _jspx_th_wp_ifauthorized_3.doStartTag();
    if (_jspx_th_wp_ifauthorized_3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_var_permission_nobody.reuse(_jspx_th_wp_ifauthorized_3);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_var_permission_nobody.reuse(_jspx_th_wp_ifauthorized_3);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_4(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_4 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_var_permission_nobody.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_4.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_4.setParent(null);
    _jspx_th_wp_ifauthorized_4.setPermission("editUsers");
    _jspx_th_wp_ifauthorized_4.setVar("editUsersPermVar");
    int _jspx_eval_wp_ifauthorized_4 = _jspx_th_wp_ifauthorized_4.doStartTag();
    if (_jspx_th_wp_ifauthorized_4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_var_permission_nobody.reuse(_jspx_th_wp_ifauthorized_4);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_var_permission_nobody.reuse(_jspx_th_wp_ifauthorized_4);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_5(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_5 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_var_permission_nobody.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_5.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_5.setParent(null);
    _jspx_th_wp_ifauthorized_5.setPermission("editUserProfile");
    _jspx_th_wp_ifauthorized_5.setVar("editUserProfilePermVar");
    int _jspx_eval_wp_ifauthorized_5 = _jspx_th_wp_ifauthorized_5.doStartTag();
    if (_jspx_th_wp_ifauthorized_5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_var_permission_nobody.reuse(_jspx_th_wp_ifauthorized_5);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_var_permission_nobody.reuse(_jspx_th_wp_ifauthorized_5);
    return false;
  }

  private boolean _jspx_meth_c_if_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  c:if
    org.apache.taglibs.standard.tag.rt.core.IfTag _jspx_th_c_if_0 = (org.apache.taglibs.standard.tag.rt.core.IfTag) _jspx_tagPool_c_if_test.get(org.apache.taglibs.standard.tag.rt.core.IfTag.class);
    _jspx_th_c_if_0.setPageContext(_jspx_page_context);
    _jspx_th_c_if_0.setParent(null);
    _jspx_th_c_if_0.setTest(((java.lang.Boolean) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${viewUsersPermVar || editUsersPermVar || editUserProfilePermVar}", java.lang.Boolean.class, (PageContext)_jspx_page_context, null)).booleanValue());
    int _jspx_eval_c_if_0 = _jspx_th_c_if_0.doStartTag();
    if (_jspx_eval_c_if_0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("\r\n");
        out.write("                                    <a href='");
        if (_jspx_meth_s_url_3((javax.servlet.jsp.tagext.JspTag) _jspx_th_c_if_0, _jspx_page_context))
          return true;
        out.write("'>\r\n");
        out.write("                                        ");
        if (_jspx_meth_s_text_19((javax.servlet.jsp.tagext.JspTag) _jspx_th_c_if_0, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                    </a>\r\n");
        out.write("                                ");
        int evalDoAfterBody = _jspx_th_c_if_0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_c_if_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_c_if_test.reuse(_jspx_th_c_if_0);
      return true;
    }
    _jspx_tagPool_c_if_test.reuse(_jspx_th_c_if_0);
    return false;
  }

  private boolean _jspx_meth_s_url_3(javax.servlet.jsp.tagext.JspTag _jspx_th_c_if_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_3 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_3.setPageContext(_jspx_page_context);
    _jspx_th_s_url_3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_if_0);
    _jspx_th_s_url_3.setAction("list");
    _jspx_th_s_url_3.setNamespace("/do/User");
    int _jspx_eval_s_url_3 = _jspx_th_s_url_3.doStartTag();
    if (_jspx_th_s_url_3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_3);
      return true;
    }
    _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_3);
    return false;
  }

  private boolean _jspx_meth_s_text_19(javax.servlet.jsp.tagext.JspTag _jspx_th_c_if_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_19 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_19.setPageContext(_jspx_page_context);
    _jspx_th_s_text_19.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_if_0);
    _jspx_th_s_text_19.setName("dashboard.userList");
    int _jspx_eval_s_text_19 = _jspx_th_s_text_19.doStartTag();
    if (_jspx_th_s_text_19.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_19);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_19);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_6(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_6 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_permission.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_6.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_6.setParent(null);
    _jspx_th_wp_ifauthorized_6.setPermission("manageCategories");
    int _jspx_eval_wp_ifauthorized_6 = _jspx_th_wp_ifauthorized_6.doStartTag();
    if (_jspx_eval_wp_ifauthorized_6 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("\r\n");
        out.write("                                    <a href='");
        if (_jspx_meth_s_url_4((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_6, _jspx_page_context))
          return true;
        out.write("'>\r\n");
        out.write("                                        ");
        if (_jspx_meth_s_text_20((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_6, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                    </a>\r\n");
        out.write("                                ");
        int evalDoAfterBody = _jspx_th_wp_ifauthorized_6.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_wp_ifauthorized_6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_6);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_6);
    return false;
  }

  private boolean _jspx_meth_s_url_4(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_6, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_4 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_4.setPageContext(_jspx_page_context);
    _jspx_th_s_url_4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_6);
    _jspx_th_s_url_4.setAction("viewTree");
    _jspx_th_s_url_4.setNamespace("/do/Category");
    int _jspx_eval_s_url_4 = _jspx_th_s_url_4.doStartTag();
    if (_jspx_th_s_url_4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_4);
      return true;
    }
    _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_4);
    return false;
  }

  private boolean _jspx_meth_s_text_20(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_6, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_20 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_20.setPageContext(_jspx_page_context);
    _jspx_th_s_text_20.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_6);
    _jspx_th_s_text_20.setName("dashboard.categories");
    int _jspx_eval_s_text_20 = _jspx_th_s_text_20.doStartTag();
    if (_jspx_th_s_text_20.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_20);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_20);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_7(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_7 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_permission.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_7.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_7.setParent(null);
    _jspx_th_wp_ifauthorized_7.setPermission("superuser");
    int _jspx_eval_wp_ifauthorized_7 = _jspx_th_wp_ifauthorized_7.doStartTag();
    if (_jspx_eval_wp_ifauthorized_7 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("\r\n");
        out.write("                                    <a href='");
        if (_jspx_meth_s_url_5((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_7, _jspx_page_context))
          return true;
        out.write("'>\r\n");
        out.write("                                        ");
        if (_jspx_meth_s_text_21((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_7, _jspx_page_context))
          return true;
        out.write(" &amp; ");
        if (_jspx_meth_s_text_22((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_7, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                    </a>\r\n");
        out.write("                                ");
        int evalDoAfterBody = _jspx_th_wp_ifauthorized_7.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_wp_ifauthorized_7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_7);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_7);
    return false;
  }

  private boolean _jspx_meth_s_url_5(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_7, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_5 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_5.setPageContext(_jspx_page_context);
    _jspx_th_s_url_5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_7);
    _jspx_th_s_url_5.setAction("list");
    _jspx_th_s_url_5.setNamespace("/do/Lang");
    int _jspx_eval_s_url_5 = _jspx_th_s_url_5.doStartTag();
    if (_jspx_th_s_url_5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_5);
      return true;
    }
    _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_5);
    return false;
  }

  private boolean _jspx_meth_s_text_21(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_7, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_21 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_21.setPageContext(_jspx_page_context);
    _jspx_th_s_text_21.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_7);
    _jspx_th_s_text_21.setName("dashboard.labels");
    int _jspx_eval_s_text_21 = _jspx_th_s_text_21.doStartTag();
    if (_jspx_th_s_text_21.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_21);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_21);
    return false;
  }

  private boolean _jspx_meth_s_text_22(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_7, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_22 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_22.setPageContext(_jspx_page_context);
    _jspx_th_s_text_22.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_7);
    _jspx_th_s_text_22.setName("dashboard.languages");
    int _jspx_eval_s_text_22 = _jspx_th_s_text_22.doStartTag();
    if (_jspx_th_s_text_22.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_22);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_22);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_8(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_8 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_permission.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_8.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_8.setParent(null);
    _jspx_th_wp_ifauthorized_8.setPermission("superuser");
    int _jspx_eval_wp_ifauthorized_8 = _jspx_th_wp_ifauthorized_8.doStartTag();
    if (_jspx_eval_wp_ifauthorized_8 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("\r\n");
        out.write("                                    <a href='");
        if (_jspx_meth_s_url_6((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_8, _jspx_page_context))
          return true;
        out.write("'>\r\n");
        out.write("                                        ");
        if (_jspx_meth_s_text_23((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_8, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                                    </a>\r\n");
        out.write("                                ");
        int evalDoAfterBody = _jspx_th_wp_ifauthorized_8.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_wp_ifauthorized_8.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_8);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_8);
    return false;
  }

  private boolean _jspx_meth_s_url_6(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_8, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_6 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_6.setPageContext(_jspx_page_context);
    _jspx_th_s_url_6.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_8);
    _jspx_th_s_url_6.setAction("reloadChoose");
    _jspx_th_s_url_6.setNamespace("/do/BaseAdmin");
    int _jspx_eval_s_url_6 = _jspx_th_s_url_6.doStartTag();
    if (_jspx_th_s_url_6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_6);
      return true;
    }
    _jspx_tagPool_s_url_namespace_action_nobody.reuse(_jspx_th_s_url_6);
    return false;
  }

  private boolean _jspx_meth_s_text_23(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_8, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_23 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_23.setPageContext(_jspx_page_context);
    _jspx_th_s_text_23.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_8);
    _jspx_th_s_text_23.setName("dashboard.reloadConfig");
    int _jspx_eval_s_text_23 = _jspx_th_s_text_23.doStartTag();
    if (_jspx_th_s_text_23.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_23);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_23);
    return false;
  }

  private boolean _jspx_meth_wp_ifauthorized_9(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_9 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_permission.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_9.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_9.setParent(null);
    _jspx_th_wp_ifauthorized_9.setPermission("editUsers");
    int _jspx_eval_wp_ifauthorized_9 = _jspx_th_wp_ifauthorized_9.doStartTag();
    if (_jspx_eval_wp_ifauthorized_9 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        if (_jspx_meth_s_url_7((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_9, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                        <a href=\"");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.evaluateExpression("${addUserURL}", java.lang.String.class, (PageContext)_jspx_page_context, null));
        out.write("\" class=\"btn btn-primary btn-block mt-10 mb-10\"\r\n");
        out.write("                           title=\"");
        if (_jspx_meth_s_text_24((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_9, _jspx_page_context))
          return true;
        out.write("\">\r\n");
        out.write("                            ");
        if (_jspx_meth_s_text_25((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_9, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("                        </a>\r\n");
        out.write("                    ");
        int evalDoAfterBody = _jspx_th_wp_ifauthorized_9.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_wp_ifauthorized_9.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_9);
      return true;
    }
    _jspx_tagPool_wp_ifauthorized_permission.reuse(_jspx_th_wp_ifauthorized_9);
    return false;
  }

  private boolean _jspx_meth_s_url_7(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_9, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:url
    org.apache.struts2.views.jsp.URLTag _jspx_th_s_url_7 = (org.apache.struts2.views.jsp.URLTag) _jspx_tagPool_s_url_var_namespace_action_nobody.get(org.apache.struts2.views.jsp.URLTag.class);
    _jspx_th_s_url_7.setPageContext(_jspx_page_context);
    _jspx_th_s_url_7.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_9);
    _jspx_th_s_url_7.setNamespace("/do/User");
    _jspx_th_s_url_7.setAction("new");
    _jspx_th_s_url_7.setVar("addUserURL");
    int _jspx_eval_s_url_7 = _jspx_th_s_url_7.doStartTag();
    if (_jspx_th_s_url_7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_url_var_namespace_action_nobody.reuse(_jspx_th_s_url_7);
      return true;
    }
    _jspx_tagPool_s_url_var_namespace_action_nobody.reuse(_jspx_th_s_url_7);
    return false;
  }

  private boolean _jspx_meth_s_text_24(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_9, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_24 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_24.setPageContext(_jspx_page_context);
    _jspx_th_s_text_24.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_9);
    _jspx_th_s_text_24.setName("dashboard.addUser");
    int _jspx_eval_s_text_24 = _jspx_th_s_text_24.doStartTag();
    if (_jspx_th_s_text_24.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_24);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_24);
    return false;
  }

  private boolean _jspx_meth_s_text_25(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_9, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:text
    org.apache.struts2.views.jsp.TextTag _jspx_th_s_text_25 = (org.apache.struts2.views.jsp.TextTag) _jspx_tagPool_s_text_name_nobody.get(org.apache.struts2.views.jsp.TextTag.class);
    _jspx_th_s_text_25.setPageContext(_jspx_page_context);
    _jspx_th_s_text_25.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_9);
    _jspx_th_s_text_25.setName("dashboard.addUser");
    int _jspx_eval_s_text_25 = _jspx_th_s_text_25.doStartTag();
    if (_jspx_th_s_text_25.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_25);
      return true;
    }
    _jspx_tagPool_s_text_name_nobody.reuse(_jspx_th_s_text_25);
    return false;
  }

  private boolean _jspx_meth_wpsa_hookPoint_2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wpsa:hookPoint
    com.agiletec.apsadmin.tags.HookPointTag _jspx_th_wpsa_hookPoint_2 = (com.agiletec.apsadmin.tags.HookPointTag) _jspx_tagPool_wpsa_hookPoint_objectName_key.get(com.agiletec.apsadmin.tags.HookPointTag.class);
    _jspx_th_wpsa_hookPoint_2.setPageContext(_jspx_page_context);
    _jspx_th_wpsa_hookPoint_2.setParent(null);
    _jspx_th_wpsa_hookPoint_2.setKey("core.dashboard.bottomActions");
    _jspx_th_wpsa_hookPoint_2.setObjectName("hookPointElements_core_dashboard_bottomActions");
    int _jspx_eval_wpsa_hookPoint_2 = _jspx_th_wpsa_hookPoint_2.doStartTag();
    if (_jspx_eval_wpsa_hookPoint_2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_wpsa_hookPoint_2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_wpsa_hookPoint_2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_wpsa_hookPoint_2.doInitBody();
      }
      do {
        if (_jspx_meth_s_iterator_2((javax.servlet.jsp.tagext.JspTag) _jspx_th_wpsa_hookPoint_2, _jspx_page_context))
          return true;
        int evalDoAfterBody = _jspx_th_wpsa_hookPoint_2.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_wpsa_hookPoint_2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE)
        out = _jspx_page_context.popBody();
    }
    if (_jspx_th_wpsa_hookPoint_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wpsa_hookPoint_objectName_key.reuse(_jspx_th_wpsa_hookPoint_2);
      return true;
    }
    _jspx_tagPool_wpsa_hookPoint_objectName_key.reuse(_jspx_th_wpsa_hookPoint_2);
    return false;
  }

  private boolean _jspx_meth_s_iterator_2(javax.servlet.jsp.tagext.JspTag _jspx_th_wpsa_hookPoint_2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  s:iterator
    org.apache.struts2.views.jsp.IteratorTag _jspx_th_s_iterator_2 = (org.apache.struts2.views.jsp.IteratorTag) _jspx_tagPool_s_iterator_var_value.get(org.apache.struts2.views.jsp.IteratorTag.class);
    _jspx_th_s_iterator_2.setPageContext(_jspx_page_context);
    _jspx_th_s_iterator_2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wpsa_hookPoint_2);
    _jspx_th_s_iterator_2.setValue("#hookPointElements_core_dashboard_bottomActions");
    _jspx_th_s_iterator_2.setVar("hookPointElement");
    int _jspx_eval_s_iterator_2 = _jspx_th_s_iterator_2.doStartTag();
    if (_jspx_eval_s_iterator_2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_s_iterator_2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_s_iterator_2.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_s_iterator_2.doInitBody();
      }
      do {
        if (_jspx_meth_wpsa_include_2((javax.servlet.jsp.tagext.JspTag) _jspx_th_s_iterator_2, _jspx_page_context))
          return true;
        int evalDoAfterBody = _jspx_th_s_iterator_2.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_s_iterator_2 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE)
        out = _jspx_page_context.popBody();
    }
    if (_jspx_th_s_iterator_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_s_iterator_var_value.reuse(_jspx_th_s_iterator_2);
      return true;
    }
    _jspx_tagPool_s_iterator_var_value.reuse(_jspx_th_s_iterator_2);
    return false;
  }

  private boolean _jspx_meth_wpsa_include_2(javax.servlet.jsp.tagext.JspTag _jspx_th_s_iterator_2, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wpsa:include
    org.apache.struts2.views.jsp.IncludeTag _jspx_th_wpsa_include_2 = (org.apache.struts2.views.jsp.IncludeTag) _jspx_tagPool_wpsa_include_value_nobody.get(org.apache.struts2.views.jsp.IncludeTag.class);
    _jspx_th_wpsa_include_2.setPageContext(_jspx_page_context);
    _jspx_th_wpsa_include_2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_s_iterator_2);
    _jspx_th_wpsa_include_2.setValue("%{#hookPointElement.filePath}");
    int _jspx_eval_wpsa_include_2 = _jspx_th_wpsa_include_2.doStartTag();
    if (_jspx_th_wpsa_include_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wpsa_include_value_nobody.reuse(_jspx_th_wpsa_include_2);
      return true;
    }
    _jspx_tagPool_wpsa_include_value_nobody.reuse(_jspx_th_wpsa_include_2);
    return false;
  }
}

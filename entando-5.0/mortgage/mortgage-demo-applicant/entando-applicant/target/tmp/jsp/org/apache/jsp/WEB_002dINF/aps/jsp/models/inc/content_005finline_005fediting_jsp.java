package org.apache.jsp.WEB_002dINF.aps.jsp.models.inc;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class content_005finline_005fediting_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.Vector _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_resourceURL_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_ifauthorized_permission;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_info_paramName_key_nobody;
  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_info_key_nobody;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _jspx_tagPool_wp_resourceURL_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_wp_ifauthorized_permission = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_wp_info_paramName_key_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _jspx_tagPool_wp_info_key_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _jspx_tagPool_wp_resourceURL_nobody.release();
    _jspx_tagPool_wp_ifauthorized_permission.release();
    _jspx_tagPool_wp_info_paramName_key_nobody.release();
    _jspx_tagPool_wp_info_key_nobody.release();
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
      out.write("administration/js/jquery-2.2.4.min.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_1(_jspx_page_context))
        return;
      out.write("administration/js/inline-editing/jquery-ui-1.10.1.custom.min.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_2(_jspx_page_context))
        return;
      out.write("administration/js/inline-editing/jqueryui-editable.min.js\"></script>\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      if (_jspx_meth_wp_resourceURL_3(_jspx_page_context))
        return;
      out.write("administration/css/jquery-ui-1.10.1.custom.css\" media=\"screen\"/>\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      if (_jspx_meth_wp_resourceURL_4(_jspx_page_context))
        return;
      out.write("administration/css/jqueryui-editable.css\" media=\"screen\"/>\n");
      out.write("\n");
      out.write("<!-----------inclusione x-editable inline------------------------>\n");
      if (_jspx_meth_wp_ifauthorized_0(_jspx_page_context))
        return;
      out.write("\n");
      out.write("\n");
      out.write("<!-----------END inclusione x-editable inline------------------------>\n");
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

  private boolean _jspx_meth_wp_ifauthorized_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_ifauthorized_0 = (com.agiletec.aps.tags.CheckPermissionTag) _jspx_tagPool_wp_ifauthorized_permission.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_ifauthorized_0.setPageContext(_jspx_page_context);
    _jspx_th_wp_ifauthorized_0.setParent(null);
    _jspx_th_wp_ifauthorized_0.setPermission("superuser");
    int _jspx_eval_wp_ifauthorized_0 = _jspx_th_wp_ifauthorized_0.doStartTag();
    if (_jspx_eval_wp_ifauthorized_0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("\n");
        out.write("    <script>\n");
        out.write("        $(function () {\n");
        out.write("            setTimeout(function () {\n");
        out.write("                //toggle `popup` / `inline` mode\n");
        out.write("                $.fn.editable.defaults.mode = 'inline';\n");
        out.write("                $('.editLabel').editable({\n");
        out.write("                    url: '");
        if (_jspx_meth_wp_info_0((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write("api/rs/en/inline/i18nlabel',\n");
        out.write("                    send: 'always',\n");
        out.write("                    ajaxOptions: {\n");
        out.write("                        dataType: 'json', //assuming json response\n");
        out.write("                        type: 'put',\n");
        out.write("                        contentType: 'application/json'\n");
        out.write("                    },\n");
        out.write("                    params: function (params) {\n");
        out.write("                        return JSON.stringify({\n");
        out.write("                            \"i18nLabel\": {\n");
        out.write("                                \"key\": params.name,\n");
        out.write("                                \"labels\": [\n");
        out.write("                                    {\n");
        out.write("                                        \"langCode\": \"");
        if (_jspx_meth_wp_info_1((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write("\",\n");
        out.write("                                        \"value\": params.value\n");
        out.write("                                    }\n");
        out.write("                                ]\n");
        out.write("                            }\n");
        out.write("                        });\n");
        out.write("                    }\n");
        out.write("                });\n");
        out.write("                //make status editable\n");
        out.write("                $('.editLabelText').editable({\n");
        out.write("                    type: 'textarea',\n");
        out.write("                    rows: 10,\n");
        out.write("                    url: '");
        if (_jspx_meth_wp_info_2((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write("api/rs/en/inline/i18nlabel',\n");
        out.write("                    send: 'always',\n");
        out.write("                    ajaxOptions: {\n");
        out.write("                        dataType: 'json', //assuming json response\n");
        out.write("                        type: 'put',\n");
        out.write("                        contentType: 'application/json'\n");
        out.write("                    },\n");
        out.write("                    params: function (params) {\n");
        out.write("                        return JSON.stringify({\n");
        out.write("                            \"i18nLabel\": {\n");
        out.write("                                \"key\": params.name,\n");
        out.write("                                \"labels\": [\n");
        out.write("                                    {\n");
        out.write("                                        \"langCode\": \"");
        if (_jspx_meth_wp_info_3((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write("\",\n");
        out.write("                                        \"value\": params.value\n");
        out.write("                                    }\n");
        out.write("                                ]\n");
        out.write("                            }\n");
        out.write("                        });\n");
        out.write("                    }\n");
        out.write("                });\n");
        out.write("                $('.editContent').editable({\n");
        out.write("                        url: '");
        if (_jspx_meth_wp_info_4((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write("api/rs/en/inline/content',\n");
        out.write("                        ajaxOptions: {\n");
        out.write("                                dataType: 'json', //assuming json response\n");
        out.write("                                type: 'put',\n");
        out.write("                                contentType: 'application/json'\n");
        out.write("                        },\n");
        out.write("                        pk: function () {\n");
        out.write("                                return $(this).data(\"content-id\");\n");
        out.write("                        },\n");
        out.write("                        params: function (params) {\n");
        out.write("                                return JSON.stringify({\n");
        out.write("                                        \"contentAttribute\": {\n");
        out.write("                                                \"contentId\": params.pk,\n");
        out.write("                                                \"attributeName\": $(this).data(\"attr-id\"),\n");
        out.write("                                                \"langCode\": \"en\",\n");
        out.write("                                                \"value\": params.value\n");
        out.write("                                        }\n");
        out.write("                                });\n");
        out.write("                        }\n");
        out.write("                });\n");
        out.write("                //make status editable\n");
        out.write("                $('.editContentText').editable({\n");
        out.write("                        type: 'textarea',\n");
        out.write("                        rows: 10,\n");
        out.write("                        cols: 50,\n");
        out.write("                        url: '");
        if (_jspx_meth_wp_info_5((javax.servlet.jsp.tagext.JspTag) _jspx_th_wp_ifauthorized_0, _jspx_page_context))
          return true;
        out.write("api/rs/en/inline/content',\n");
        out.write("                        ajaxOptions: {\n");
        out.write("                                dataType: 'json', //assuming json response\n");
        out.write("                                type: 'put',\n");
        out.write("                                contentType: 'application/json'\n");
        out.write("                        },\n");
        out.write("                        pk: function () {\n");
        out.write("                                return $(this).data(\"content-id\");\n");
        out.write("                        },\n");
        out.write("                        params: function (params) {\n");
        out.write("                                return JSON.stringify({\n");
        out.write("                                        \"contentAttribute\": {\n");
        out.write("                                                \"contentId\": params.pk,\n");
        out.write("                                                \"attributeName\": $(this).data(\"attr-id\"),\n");
        out.write("                                                \"langCode\": \"en\",\n");
        out.write("                                                \"value\": params.value\n");
        out.write("                                        }\n");
        out.write("                                });\n");
        out.write("                        }\n");
        out.write("                });\n");
        out.write("            }, 500);\n");
        out.write("        });\n");
        out.write("    </script>\n");
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

  private boolean _jspx_meth_wp_info_0(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_info_0 = (com.agiletec.aps.tags.InfoTag) _jspx_tagPool_wp_info_paramName_key_nobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_info_0.setPageContext(_jspx_page_context);
    _jspx_th_wp_info_0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
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

  private boolean _jspx_meth_wp_info_1(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_info_1 = (com.agiletec.aps.tags.InfoTag) _jspx_tagPool_wp_info_key_nobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_info_1.setPageContext(_jspx_page_context);
    _jspx_th_wp_info_1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
    _jspx_th_wp_info_1.setKey("currentLang");
    int _jspx_eval_wp_info_1 = _jspx_th_wp_info_1.doStartTag();
    if (_jspx_th_wp_info_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_info_key_nobody.reuse(_jspx_th_wp_info_1);
      return true;
    }
    _jspx_tagPool_wp_info_key_nobody.reuse(_jspx_th_wp_info_1);
    return false;
  }

  private boolean _jspx_meth_wp_info_2(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_info_2 = (com.agiletec.aps.tags.InfoTag) _jspx_tagPool_wp_info_paramName_key_nobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_info_2.setPageContext(_jspx_page_context);
    _jspx_th_wp_info_2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
    _jspx_th_wp_info_2.setKey("systemParam");
    _jspx_th_wp_info_2.setParamName("applicationBaseURL");
    int _jspx_eval_wp_info_2 = _jspx_th_wp_info_2.doStartTag();
    if (_jspx_th_wp_info_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_info_paramName_key_nobody.reuse(_jspx_th_wp_info_2);
      return true;
    }
    _jspx_tagPool_wp_info_paramName_key_nobody.reuse(_jspx_th_wp_info_2);
    return false;
  }

  private boolean _jspx_meth_wp_info_3(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_info_3 = (com.agiletec.aps.tags.InfoTag) _jspx_tagPool_wp_info_key_nobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_info_3.setPageContext(_jspx_page_context);
    _jspx_th_wp_info_3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
    _jspx_th_wp_info_3.setKey("currentLang");
    int _jspx_eval_wp_info_3 = _jspx_th_wp_info_3.doStartTag();
    if (_jspx_th_wp_info_3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_info_key_nobody.reuse(_jspx_th_wp_info_3);
      return true;
    }
    _jspx_tagPool_wp_info_key_nobody.reuse(_jspx_th_wp_info_3);
    return false;
  }

  private boolean _jspx_meth_wp_info_4(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_info_4 = (com.agiletec.aps.tags.InfoTag) _jspx_tagPool_wp_info_paramName_key_nobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_info_4.setPageContext(_jspx_page_context);
    _jspx_th_wp_info_4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
    _jspx_th_wp_info_4.setKey("systemParam");
    _jspx_th_wp_info_4.setParamName("applicationBaseURL");
    int _jspx_eval_wp_info_4 = _jspx_th_wp_info_4.doStartTag();
    if (_jspx_th_wp_info_4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_info_paramName_key_nobody.reuse(_jspx_th_wp_info_4);
      return true;
    }
    _jspx_tagPool_wp_info_paramName_key_nobody.reuse(_jspx_th_wp_info_4);
    return false;
  }

  private boolean _jspx_meth_wp_info_5(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_ifauthorized_0, PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_info_5 = (com.agiletec.aps.tags.InfoTag) _jspx_tagPool_wp_info_paramName_key_nobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_info_5.setPageContext(_jspx_page_context);
    _jspx_th_wp_info_5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_ifauthorized_0);
    _jspx_th_wp_info_5.setKey("systemParam");
    _jspx_th_wp_info_5.setParamName("applicationBaseURL");
    int _jspx_eval_wp_info_5 = _jspx_th_wp_info_5.doStartTag();
    if (_jspx_th_wp_info_5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_info_paramName_key_nobody.reuse(_jspx_th_wp_info_5);
      return true;
    }
    _jspx_tagPool_wp_info_paramName_key_nobody.reuse(_jspx_th_wp_info_5);
    return false;
  }
}

/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: jetty/9.2.11.v20150529
 * Generated at: 2018-04-29 00:08:47 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.aps.jsp.models.inc;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class content_005finline_005fediting_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(4);
    _jspx_dependants.put("file:/Users/own_strong/Dev/Entando/FSIDemo/backend/fsi-credit-card-dispute-customer/target/tmp/entando-admin-console-5_0_0-SNAPSHOT_war2/WEB-INF/lib/entando-engine-5.0.0-SNAPSHOT.jar", Long.valueOf(1524804836000L));
    _jspx_dependants.put("jar:file:/Users/own_strong/Dev/Entando/FSIDemo/backend/fsi-credit-card-dispute-customer/target/tmp/entando-admin-console-5_0_0-SNAPSHOT_war2/WEB-INF/lib/entando-engine-5.0.0-SNAPSHOT.jar!/META-INF/aps-core.tld", Long.valueOf(1524804824000L));
    _jspx_dependants.put("file:/Users/own_strong/Dev/Entando/FSIDemo/backend/fsi-credit-card-dispute-customer/target/tmp/entando-admin-console-5_0_0-SNAPSHOT_war2/WEB-INF/lib/jstl-1.2.jar", Long.valueOf(1513916412000L));
    _jspx_dependants.put("jar:file:/Users/own_strong/Dev/Entando/FSIDemo/backend/fsi-credit-card-dispute-customer/target/tmp/entando-admin-console-5_0_0-SNAPSHOT_war2/WEB-INF/lib/jstl-1.2.jar!/META-INF/c.tld", Long.valueOf(1153349082000L));
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fwp_005fifauthorized_0026_005fpermission;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fwp_005finfo_0026_005fkey_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fwp_005fifauthorized_0026_005fpermission = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.release();
    _005fjspx_005ftagPool_005fwp_005fifauthorized_0026_005fpermission.release();
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.release();
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fkey_005fnobody.release();
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


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

      out.write("<script src=\"");
      if (_jspx_meth_wp_005fresourceURL_005f0(_jspx_page_context))
        return;
      out.write("administration/js/jquery-2.2.4.min.js\"></script>\r\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_005fresourceURL_005f1(_jspx_page_context))
        return;
      out.write("administration/js/inline-editing/jquery-ui-1.10.1.custom.min.js\"></script>\r\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_005fresourceURL_005f2(_jspx_page_context))
        return;
      out.write("administration/js/inline-editing/jqueryui-editable.min.js\"></script>\r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      if (_jspx_meth_wp_005fresourceURL_005f3(_jspx_page_context))
        return;
      out.write("administration/css/jquery-ui-1.10.1.custom.css\" media=\"screen\"/>\r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      if (_jspx_meth_wp_005fresourceURL_005f4(_jspx_page_context))
        return;
      out.write("administration/css/jqueryui-editable.css\" media=\"screen\"/>\r\n");
      out.write("\r\n");
      out.write("<!-----------inclusione x-editable inline------------------------>\r\n");
      if (_jspx_meth_wp_005fifauthorized_005f0(_jspx_page_context))
        return;
      out.write("<!-----------END inclusione x-editable inline------------------------>\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_wp_005fresourceURL_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_005fresourceURL_005f0 = (com.agiletec.aps.tags.ResourceURLTag) _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_005fresourceURL_005f0.setPageContext(_jspx_page_context);
    _jspx_th_wp_005fresourceURL_005f0.setParent(null);
    int _jspx_eval_wp_005fresourceURL_005f0 = _jspx_th_wp_005fresourceURL_005f0.doStartTag();
    if (_jspx_th_wp_005fresourceURL_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f0);
    return false;
  }

  private boolean _jspx_meth_wp_005fresourceURL_005f1(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_005fresourceURL_005f1 = (com.agiletec.aps.tags.ResourceURLTag) _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_005fresourceURL_005f1.setPageContext(_jspx_page_context);
    _jspx_th_wp_005fresourceURL_005f1.setParent(null);
    int _jspx_eval_wp_005fresourceURL_005f1 = _jspx_th_wp_005fresourceURL_005f1.doStartTag();
    if (_jspx_th_wp_005fresourceURL_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f1);
    return false;
  }

  private boolean _jspx_meth_wp_005fresourceURL_005f2(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_005fresourceURL_005f2 = (com.agiletec.aps.tags.ResourceURLTag) _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_005fresourceURL_005f2.setPageContext(_jspx_page_context);
    _jspx_th_wp_005fresourceURL_005f2.setParent(null);
    int _jspx_eval_wp_005fresourceURL_005f2 = _jspx_th_wp_005fresourceURL_005f2.doStartTag();
    if (_jspx_th_wp_005fresourceURL_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f2);
    return false;
  }

  private boolean _jspx_meth_wp_005fresourceURL_005f3(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_005fresourceURL_005f3 = (com.agiletec.aps.tags.ResourceURLTag) _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_005fresourceURL_005f3.setPageContext(_jspx_page_context);
    _jspx_th_wp_005fresourceURL_005f3.setParent(null);
    int _jspx_eval_wp_005fresourceURL_005f3 = _jspx_th_wp_005fresourceURL_005f3.doStartTag();
    if (_jspx_th_wp_005fresourceURL_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f3);
    return false;
  }

  private boolean _jspx_meth_wp_005fresourceURL_005f4(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_005fresourceURL_005f4 = (com.agiletec.aps.tags.ResourceURLTag) _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_005fresourceURL_005f4.setPageContext(_jspx_page_context);
    _jspx_th_wp_005fresourceURL_005f4.setParent(null);
    int _jspx_eval_wp_005fresourceURL_005f4 = _jspx_th_wp_005fresourceURL_005f4.doStartTag();
    if (_jspx_th_wp_005fresourceURL_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005fresourceURL_005fnobody.reuse(_jspx_th_wp_005fresourceURL_005f4);
    return false;
  }

  private boolean _jspx_meth_wp_005fifauthorized_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:ifauthorized
    com.agiletec.aps.tags.CheckPermissionTag _jspx_th_wp_005fifauthorized_005f0 = (com.agiletec.aps.tags.CheckPermissionTag) _005fjspx_005ftagPool_005fwp_005fifauthorized_0026_005fpermission.get(com.agiletec.aps.tags.CheckPermissionTag.class);
    _jspx_th_wp_005fifauthorized_005f0.setPageContext(_jspx_page_context);
    _jspx_th_wp_005fifauthorized_005f0.setParent(null);
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(11,0) name = permission type = null reqTime = true required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005fifauthorized_005f0.setPermission("superuser");
    int _jspx_eval_wp_005fifauthorized_005f0 = _jspx_th_wp_005fifauthorized_005f0.doStartTag();
    if (_jspx_eval_wp_005fifauthorized_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("<script>\r\n");
        out.write("        $(function () {\r\n");
        out.write("            setTimeout(function () {\r\n");
        out.write("                //toggle `popup` / `inline` mode\r\n");
        out.write("                $.fn.editable.defaults.mode = 'inline';\r\n");
        out.write("                $('.editLabel').editable({\r\n");
        out.write("                    url: '");
        if (_jspx_meth_wp_005finfo_005f0(_jspx_th_wp_005fifauthorized_005f0, _jspx_page_context))
          return true;
        out.write("api/rs/en/inline/i18nlabel',\r\n");
        out.write("                    send: 'always',\r\n");
        out.write("                    ajaxOptions: {\r\n");
        out.write("                        dataType: 'json', //assuming json response\r\n");
        out.write("                        type: 'put',\r\n");
        out.write("                        contentType: 'application/json',\r\n");
        out.write("                        beforeSend: function (xhr) {\r\n");
        out.write("                            var accessToken = window.localStorage.getItem(\"accessToken\");\r\n");
        out.write("                            xhr.setRequestHeader(\"Authorization\", \"Bearer \" + accessToken);\r\n");
        out.write("\r\n");
        out.write("                        }\r\n");
        out.write("                    },\r\n");
        out.write("                    params: function (params) {\r\n");
        out.write("                        return JSON.stringify({\r\n");
        out.write("                            \"i18nLabel\": {\r\n");
        out.write("                                \"key\": params.name,\r\n");
        out.write("                                \"labels\": [\r\n");
        out.write("                                    {\r\n");
        out.write("                                        \"langCode\": \"");
        if (_jspx_meth_wp_005finfo_005f1(_jspx_th_wp_005fifauthorized_005f0, _jspx_page_context))
          return true;
        out.write("\",\r\n");
        out.write("                                        \"value\": params.value\r\n");
        out.write("                                    }\r\n");
        out.write("                                ]\r\n");
        out.write("                            }\r\n");
        out.write("                        });\r\n");
        out.write("                    }\r\n");
        out.write("                });\r\n");
        out.write("                //make status editable\r\n");
        out.write("                $('.editLabelText').editable({\r\n");
        out.write("                    type: 'textarea',\r\n");
        out.write("                    rows: 10,\r\n");
        out.write("                    url: '");
        if (_jspx_meth_wp_005finfo_005f2(_jspx_th_wp_005fifauthorized_005f0, _jspx_page_context))
          return true;
        out.write("api/rs/en/inline/i18nlabel',\r\n");
        out.write("                    send: 'always',\r\n");
        out.write("                    ajaxOptions: {\r\n");
        out.write("                        dataType: 'json', //assuming json response\r\n");
        out.write("                        type: 'put',\r\n");
        out.write("                        contentType: 'application/json',\r\n");
        out.write("                        beforeSend: function (xhr) {\r\n");
        out.write("                            var accessToken = window.localStorage.getItem(\"accessToken\");\r\n");
        out.write("                            xhr.setRequestHeader(\"Authorization\", \"Bearer \" + accessToken);\r\n");
        out.write("\r\n");
        out.write("                        }\r\n");
        out.write("                    },\r\n");
        out.write("                    params: function (params) {\r\n");
        out.write("                        return JSON.stringify({\r\n");
        out.write("                            \"i18nLabel\": {\r\n");
        out.write("                                \"key\": params.name,\r\n");
        out.write("                                \"labels\": [\r\n");
        out.write("                                    {\r\n");
        out.write("                                        \"langCode\": \"");
        if (_jspx_meth_wp_005finfo_005f3(_jspx_th_wp_005fifauthorized_005f0, _jspx_page_context))
          return true;
        out.write("\",\r\n");
        out.write("                                        \"value\": params.value\r\n");
        out.write("                                    }\r\n");
        out.write("                                ]\r\n");
        out.write("                            }\r\n");
        out.write("                        });\r\n");
        out.write("                    }\r\n");
        out.write("                });\r\n");
        out.write("                $('.editContent').editable({\r\n");
        out.write("                    url: '");
        if (_jspx_meth_wp_005finfo_005f4(_jspx_th_wp_005fifauthorized_005f0, _jspx_page_context))
          return true;
        out.write("api/rs/en/inline/content',\r\n");
        out.write("                    ajaxOptions: {\r\n");
        out.write("                        dataType: 'json', //assuming json response\r\n");
        out.write("                        type: 'put',\r\n");
        out.write("                        contentType: 'application/json',\r\n");
        out.write("                        beforeSend: function (xhr) {\r\n");
        out.write("                            var accessToken = window.localStorage.getItem(\"accessToken\");\r\n");
        out.write("                            xhr.setRequestHeader(\"Authorization\", \"Bearer \" + accessToken);\r\n");
        out.write("\r\n");
        out.write("                        }\r\n");
        out.write("                    },\r\n");
        out.write("                    pk: function () {\r\n");
        out.write("                        return $(this).data(\"content-id\");\r\n");
        out.write("                    },\r\n");
        out.write("                    params: function (params) {\r\n");
        out.write("                        return JSON.stringify({\r\n");
        out.write("                            \"contentAttribute\": {\r\n");
        out.write("                                \"contentId\": params.pk,\r\n");
        out.write("                                \"attributeName\": $(this).data(\"attr-id\"),\r\n");
        out.write("                                \"langCode\": \"en\",\r\n");
        out.write("                                \"value\": params.value\r\n");
        out.write("                            }\r\n");
        out.write("                        });\r\n");
        out.write("                    }\r\n");
        out.write("                });\r\n");
        out.write("                //make status editable\r\n");
        out.write("                $('.editContentText').editable({\r\n");
        out.write("                    type: 'textarea',\r\n");
        out.write("                    rows: 10,\r\n");
        out.write("                    cols: 50,\r\n");
        out.write("                    url: '");
        if (_jspx_meth_wp_005finfo_005f5(_jspx_th_wp_005fifauthorized_005f0, _jspx_page_context))
          return true;
        out.write("api/rs/en/inline/content',\r\n");
        out.write("                    ajaxOptions: {\r\n");
        out.write("                        dataType: 'json', //assuming json response\r\n");
        out.write("                        type: 'put',\r\n");
        out.write("                        contentType: 'application/json',\r\n");
        out.write("                        beforeSend: function (xhr) {\r\n");
        out.write("                            var accessToken = window.localStorage.getItem(\"accessToken\");\r\n");
        out.write("                            xhr.setRequestHeader(\"Authorization\", \"Bearer \" + accessToken);\r\n");
        out.write("\r\n");
        out.write("                        }\r\n");
        out.write("                    },\r\n");
        out.write("                    pk: function () {\r\n");
        out.write("                        return $(this).data(\"content-id\");\r\n");
        out.write("                    },\r\n");
        out.write("                    params: function (params) {\r\n");
        out.write("                        return JSON.stringify({\r\n");
        out.write("                            \"contentAttribute\": {\r\n");
        out.write("                                \"contentId\": params.pk,\r\n");
        out.write("                                \"attributeName\": $(this).data(\"attr-id\"),\r\n");
        out.write("                                \"langCode\": \"en\",\r\n");
        out.write("                                \"value\": params.value\r\n");
        out.write("                            }\r\n");
        out.write("                        });\r\n");
        out.write("                    }\r\n");
        out.write("                });\r\n");
        out.write("            }, 500);\r\n");
        out.write("        });\r\n");
        out.write("    </script>\r\n");
        int evalDoAfterBody = _jspx_th_wp_005fifauthorized_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_wp_005fifauthorized_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005fifauthorized_0026_005fpermission.reuse(_jspx_th_wp_005fifauthorized_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005fifauthorized_0026_005fpermission.reuse(_jspx_th_wp_005fifauthorized_005f0);
    return false;
  }

  private boolean _jspx_meth_wp_005finfo_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_005fifauthorized_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_005finfo_005f0 = (com.agiletec.aps.tags.InfoTag) _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_005finfo_005f0.setPageContext(_jspx_page_context);
    _jspx_th_wp_005finfo_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_005fifauthorized_005f0);
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(18,26) name = key type = java.lang.String reqTime = false required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f0.setKey("systemParam");
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(18,26) name = paramName type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f0.setParamName("applicationBaseURL");
    int _jspx_eval_wp_005finfo_005f0 = _jspx_th_wp_005finfo_005f0.doStartTag();
    if (_jspx_th_wp_005finfo_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f0);
    return false;
  }

  private boolean _jspx_meth_wp_005finfo_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_005fifauthorized_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_005finfo_005f1 = (com.agiletec.aps.tags.InfoTag) _005fjspx_005ftagPool_005fwp_005finfo_0026_005fkey_005fnobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_005finfo_005f1.setPageContext(_jspx_page_context);
    _jspx_th_wp_005finfo_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_005fifauthorized_005f0);
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(36,53) name = key type = java.lang.String reqTime = false required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f1.setKey("currentLang");
    int _jspx_eval_wp_005finfo_005f1 = _jspx_th_wp_005finfo_005f1.doStartTag();
    if (_jspx_th_wp_005finfo_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005finfo_0026_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f1);
    return false;
  }

  private boolean _jspx_meth_wp_005finfo_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_005fifauthorized_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_005finfo_005f2 = (com.agiletec.aps.tags.InfoTag) _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_005finfo_005f2.setPageContext(_jspx_page_context);
    _jspx_th_wp_005finfo_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_005fifauthorized_005f0);
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(48,26) name = key type = java.lang.String reqTime = false required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f2.setKey("systemParam");
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(48,26) name = paramName type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f2.setParamName("applicationBaseURL");
    int _jspx_eval_wp_005finfo_005f2 = _jspx_th_wp_005finfo_005f2.doStartTag();
    if (_jspx_th_wp_005finfo_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f2);
    return false;
  }

  private boolean _jspx_meth_wp_005finfo_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_005fifauthorized_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_005finfo_005f3 = (com.agiletec.aps.tags.InfoTag) _005fjspx_005ftagPool_005fwp_005finfo_0026_005fkey_005fnobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_005finfo_005f3.setPageContext(_jspx_page_context);
    _jspx_th_wp_005finfo_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_005fifauthorized_005f0);
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(66,53) name = key type = java.lang.String reqTime = false required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f3.setKey("currentLang");
    int _jspx_eval_wp_005finfo_005f3 = _jspx_th_wp_005finfo_005f3.doStartTag();
    if (_jspx_th_wp_005finfo_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005finfo_0026_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f3);
    return false;
  }

  private boolean _jspx_meth_wp_005finfo_005f4(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_005fifauthorized_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_005finfo_005f4 = (com.agiletec.aps.tags.InfoTag) _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_005finfo_005f4.setPageContext(_jspx_page_context);
    _jspx_th_wp_005finfo_005f4.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_005fifauthorized_005f0);
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(75,26) name = key type = java.lang.String reqTime = false required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f4.setKey("systemParam");
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(75,26) name = paramName type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f4.setParamName("applicationBaseURL");
    int _jspx_eval_wp_005finfo_005f4 = _jspx_th_wp_005finfo_005f4.doStartTag();
    if (_jspx_th_wp_005finfo_005f4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f4);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f4);
    return false;
  }

  private boolean _jspx_meth_wp_005finfo_005f5(javax.servlet.jsp.tagext.JspTag _jspx_th_wp_005fifauthorized_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  wp:info
    com.agiletec.aps.tags.InfoTag _jspx_th_wp_005finfo_005f5 = (com.agiletec.aps.tags.InfoTag) _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.get(com.agiletec.aps.tags.InfoTag.class);
    _jspx_th_wp_005finfo_005f5.setPageContext(_jspx_page_context);
    _jspx_th_wp_005finfo_005f5.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_wp_005fifauthorized_005f0);
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(105,26) name = key type = java.lang.String reqTime = false required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f5.setKey("systemParam");
    // /WEB-INF/aps/jsp/models/inc/content_inline_editing.jsp(105,26) name = paramName type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_wp_005finfo_005f5.setParamName("applicationBaseURL");
    int _jspx_eval_wp_005finfo_005f5 = _jspx_th_wp_005finfo_005f5.doStartTag();
    if (_jspx_th_wp_005finfo_005f5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f5);
      return true;
    }
    _005fjspx_005ftagPool_005fwp_005finfo_0026_005fparamName_005fkey_005fnobody.reuse(_jspx_th_wp_005finfo_005f5);
    return false;
  }
}

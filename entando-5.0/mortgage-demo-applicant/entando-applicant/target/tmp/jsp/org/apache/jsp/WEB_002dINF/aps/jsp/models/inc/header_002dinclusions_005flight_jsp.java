package org.apache.jsp.WEB_002dINF.aps.jsp.models.inc;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class header_002dinclusions_005flight_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.Vector _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_wp_resourceURL_nobody;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _jspx_tagPool_wp_resourceURL_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _jspx_tagPool_wp_resourceURL_nobody.release();
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
      out.write("<link rel=\"stylesheet\" href=\"");
      if (_jspx_meth_wp_resourceURL_0(_jspx_page_context))
        return;
      out.write("static/css/bootstrap.min.css\" rel=\"stylesheet\">\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      if (_jspx_meth_wp_resourceURL_1(_jspx_page_context))
        return;
      out.write("static/css/style2.css\" rel=\"stylesheet\">\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      if (_jspx_meth_wp_resourceURL_2(_jspx_page_context))
        return;
      out.write("static/css/magnific-popup.css\">\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      if (_jspx_meth_wp_resourceURL_3(_jspx_page_context))
        return;
      out.write("static/css/pe-icon-7-stroke.css\" rel=\"stylesheet\">\n");
      out.write("\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_4(_jspx_page_context))
        return;
      out.write("static/js/bootstrap.min.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_5(_jspx_page_context))
        return;
      out.write("static/js/jquery.app.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_6(_jspx_page_context))
        return;
      out.write("static/js/jquery.magnific-popup.min.js\"></script>\n");
      out.write("<script src=\"");
      if (_jspx_meth_wp_resourceURL_7(_jspx_page_context))
        return;
      out.write("static/js/parsley.min.js\"></script>");
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

  private boolean _jspx_meth_wp_resourceURL_5(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_resourceURL_5 = (com.agiletec.aps.tags.ResourceURLTag) _jspx_tagPool_wp_resourceURL_nobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_resourceURL_5.setPageContext(_jspx_page_context);
    _jspx_th_wp_resourceURL_5.setParent(null);
    int _jspx_eval_wp_resourceURL_5 = _jspx_th_wp_resourceURL_5.doStartTag();
    if (_jspx_th_wp_resourceURL_5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_5);
      return true;
    }
    _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_5);
    return false;
  }

  private boolean _jspx_meth_wp_resourceURL_6(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_resourceURL_6 = (com.agiletec.aps.tags.ResourceURLTag) _jspx_tagPool_wp_resourceURL_nobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_resourceURL_6.setPageContext(_jspx_page_context);
    _jspx_th_wp_resourceURL_6.setParent(null);
    int _jspx_eval_wp_resourceURL_6 = _jspx_th_wp_resourceURL_6.doStartTag();
    if (_jspx_th_wp_resourceURL_6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_6);
      return true;
    }
    _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_6);
    return false;
  }

  private boolean _jspx_meth_wp_resourceURL_7(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  wp:resourceURL
    com.agiletec.aps.tags.ResourceURLTag _jspx_th_wp_resourceURL_7 = (com.agiletec.aps.tags.ResourceURLTag) _jspx_tagPool_wp_resourceURL_nobody.get(com.agiletec.aps.tags.ResourceURLTag.class);
    _jspx_th_wp_resourceURL_7.setPageContext(_jspx_page_context);
    _jspx_th_wp_resourceURL_7.setParent(null);
    int _jspx_eval_wp_resourceURL_7 = _jspx_th_wp_resourceURL_7.doStartTag();
    if (_jspx_th_wp_resourceURL_7.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_7);
      return true;
    }
    _jspx_tagPool_wp_resourceURL_nobody.reuse(_jspx_th_wp_resourceURL_7);
    return false;
  }
}

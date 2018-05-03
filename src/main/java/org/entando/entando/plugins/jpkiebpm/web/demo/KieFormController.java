/*
 * The MIT License
 *
 * Copyright 2018 Entando Inc..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.entando.entando.plugins.jpkiebpm.web.demo;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.io.IOUtils;
import org.entando.entando.plugins.jpkiebpm.aps.system.services.kie.IKieFormService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KieFormController {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private IKieFormService kieFormService;

    public IKieFormService getKieFormService() {
        return kieFormService;
    }

    public void setKieFormService(IKieFormService kieFormService) {
        this.kieFormService = kieFormService;
    }

    //@RestAccessControl(permission = "")
    //@RequestMapping(value = "/kiebpm/runAdditionalInfoRules/{instance}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @RequestMapping(value = "/kiebpm/runAdditionalInfoRules/{instance:.+}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    //@ResponseBody
    public String runAdditionalInfoRules(@PathVariable String instance, HttpServletRequest request) throws IOException {
        String json = IOUtils.toString(request.getInputStream());
        System.out.println("json = " + json);
        return this.getKieFormService().runAdditionalInfoRules(json, instance);
    }

}

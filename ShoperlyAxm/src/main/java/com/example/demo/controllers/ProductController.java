package com.example.demo.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.demo.config.CloudinaryConfig;
import com.example.demo.models.Product;
import com.example.demo.models.Shopping_Cart;
import com.example.demo.models.Supplier;
import com.example.demo.repository.IProductRepository;
import com.example.demo.services.ProductService;
import com.example.demo.utils.BillPdf;
import com.example.demo.utils.UrlResponse;
import com.lowagie.text.DocumentException;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	
	@Autowired
	private ProductService productService;
	
    
    @Autowired
    private CloudinaryConfig cloudc;
    

	
	@GetMapping
	public ResponseEntity<List<Product>> getAll() {
        return ResponseEntity.ok(productService.getAll());
    }
	
    @GetMapping("/{id}")
    public ResponseEntity<Product> getId(@PathVariable Long id) {
        Product product = productService.getId(id);
        
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product product) {
    	System.out.println(product.getUrl());
        return ResponseEntity.ok(productService.save(product));
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }
    
    
    @GetMapping("/category/{id}")
    public ResponseEntity<List<Product>> findByCategory(@PathVariable Long id){
    	return ResponseEntity.ok(productService.findByCategory(id));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Product> putProduct(@PathVariable Long id, @RequestBody Product newProduct) {
    	Product aux = productService.getId(id);

        if (aux != null) {
        	aux.setName(newProduct.getName());
        	aux.setDescription(newProduct.getDescription());
        	aux.setPrice(newProduct.getPrice());
        	aux.setSupplier(newProduct.getSupplier());
            aux.setCategory(newProduct.getCategory());
            aux.setState(newProduct.getState());
            aux.setUrl(newProduct.getUrl());
            aux.setQuantity(newProduct.getQuantity());
            
            return ResponseEntity.ok(productService.save(aux));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/export/pdf")
	public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException {
		response.setContentType("application/pdf");


		String headerKey = "Content-Disposition";
		String headerValue = "attachment; filename=factura.pdf";
		response.setHeader(headerKey, headerValue);

		BillPdf  exporter = new BillPdf();
		exporter.export(response);

	}
    

    @PostMapping("/image-rest")
    public ResponseEntity<UrlResponse> addProducto(@RequestParam("file") MultipartFile file) throws Exception {
        try {
            Map uploadResult = cloudc.upload(file.getBytes(), ObjectUtils.asMap("resource_type", "auto"));
            System.out.println(uploadResult.get("url").toString());
            return ResponseEntity.ok(new UrlResponse(uploadResult.get("url").toString())) ;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw e;
        }
    }

}

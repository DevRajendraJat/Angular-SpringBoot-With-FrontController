package com.rays.service;

import com.rays.common.BaseServiceInt;
import com.rays.common.UserContext;
import com.rays.dto.CollegeDTO;

/**
 * College Service interface.
 * Raj Jat 
 */

public interface CollegeServiceInt extends BaseServiceInt<CollegeDTO> {

	/**
	 * Finds a Role by name.
	 */
	public CollegeDTO findByName(String name, UserContext context);

}
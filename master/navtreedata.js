/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "PDI", "index.html", [
    [ "About", "index.html", "index" ],
    [ "C API Reference", "modules.html", "modules" ],
    [ "Core Concepts", "Concepts.html", [
      [ "Philosophy of PDI", "Concepts.html#pdi_philosophy", null ],
      [ "PDI description", "Concepts.html#PDI_description", null ],
      [ "Data store", "Concepts.html#Data_store", null ],
      [ "Event subsystem", "Concepts.html#Event_subsystem", null ],
      [ "Specification tree", "Concepts.html#Specification_tree", null ],
      [ "Conclusion", "Concepts.html#autotoc_md3", null ]
    ] ],
    [ "FAQ", "FAQ.html", [
      [ "Compile PDI with Intel compiler", "FAQ.html#autotoc_md4", [
        [ "load PDI with <tt>include</tt> instead of using the module", "FAQ.html#autotoc_md5", null ],
        [ "compile PDI with GCC for C/C++, use Intel compiler for Fortran", "FAQ.html#autotoc_md6", null ],
        [ "compile PDI in a fully Intel environment, with GNU C++ library only", "FAQ.html#autotoc_md7", null ]
      ] ]
    ] ],
    [ "First steps with PDI", "First_steps.html", [
      [ "Hello Event", "First_steps.html#fs_hello_event", null ],
      [ "Hello Data", "First_steps.html#fs_hello_data", null ],
      [ "Hello Access", "First_steps.html#fs_hello_access", null ],
      [ "Hello multi expose", "First_steps.html#fs_hello_multi_expose", null ]
    ] ],
    [ "Installation of PDI", "Installation.html", "Installation" ],
    [ "Plugins", "Plugins.html", "Plugins" ],
    [ "Specification tree Reference", "Specification_tree_ref.html", "Specification_tree_ref" ],
    [ "PDI usage", "PDI_usage.html", [
      [ "Preparing the environment", "PDI_usage.html#preparing_the_environment", [
        [ "PDI was installed in default location", "PDI_usage.html#pdi_in_default_location", null ],
        [ "PDI was installed in custom location", "PDI_usage.html#pdi_not_in_default_location", null ]
      ] ],
      [ "Compilation of an application", "PDI_usage.html#compilation_of__app", [
        [ "Compiling by hand", "PDI_usage.html#compiling_by_hand", null ],
        [ "Compiling with cmake", "PDI_usage.html#compiling_with_cmake", [
          [ "C/C++ compilation", "PDI_usage.html#c_cpp_compiling_with_cmake_application", null ],
          [ "Fortran compilation", "PDI_usage.html#fortan_compiling_by_cmake_application", null ]
        ] ]
      ] ],
      [ "Running an application", "PDI_usage.html#running_app", null ]
    ] ],
    [ "PDI examples", "md__builds_pdidev_pdi_example_README.html", [
      [ "Code algorithm", "md__builds_pdidev_pdi_example_README.html#heat_algorithm", null ],
      [ "PDI integration", "md__builds_pdidev_pdi_example_README.html#pdi_integration", null ]
    ] ],
    [ "Hands-on tutorial", "md__builds_pdidev_pdi_tutorial_README.html", [
      [ "Setup", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md65", [
        [ "PDI installation", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md66", null ],
        [ "Hands-on tutorial setup", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md67", null ],
        [ "Compilation", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md68", null ],
        [ "Execution", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md69", null ]
      ] ],
      [ "PDI-free code", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md70", [
        [ "Ex1. Getting started", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md71", null ]
      ] ],
      [ "PDI core & trace plugin", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md72", [
        [ "Ex2. Now with some PDI", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md73", null ]
      ] ],
      [ "Decl'HDF5 plugin", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md74", [
        [ "Ex3. HDF5 through PDI", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md75", null ],
        [ "Ex4. Writing some real data", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md76", null ],
        [ "Ex5. Introducing events", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md77", null ],
        [ "Ex6. Simplifying the code", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md78", null ],
        [ "Ex7. Writing a selection", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md79", null ],
        [ "Ex8. Selecting on the dataset size", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md80", null ]
      ] ],
      [ "parallel Decl'HDF5", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md81", [
        [ "Ex9. Going parallel", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md82", null ]
      ] ],
      [ "Pycall", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md83", [
        [ "Ex10. Post-processing the data in python", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md84", null ]
      ] ],
      [ "What next ?", "md__builds_pdidev_pdi_tutorial_README.html#autotoc_md85", null ]
    ] ],
    [ "The Decl'HDF5 plugin", "md__builds_pdidev_pdi_plugins_decl_hdf5_README.html", [
      [ "Configuration grammar", "md__builds_pdidev_pdi_plugins_decl_hdf5_README.html#autotoc_md86", [
        [ "<tt>FILE_DESC</tt>", "md__builds_pdidev_pdi_plugins_decl_hdf5_README.html#autotoc_md87", null ],
        [ "<tt>DATA_SECTION</tt>", "md__builds_pdidev_pdi_plugins_decl_hdf5_README.html#autotoc_md88", null ],
        [ "<tt>DATA_IO_DESC</tt>", "md__builds_pdidev_pdi_plugins_decl_hdf5_README.html#autotoc_md89", null ],
        [ "<tt>SELECTION_DESC</tt>", "md__builds_pdidev_pdi_plugins_decl_hdf5_README.html#autotoc_md90", null ],
        [ "<tt>COLLISION_POLICY</tt>", "md__builds_pdidev_pdi_plugins_decl_hdf5_README.html#COLLISION_POLICY", null ]
      ] ],
      [ "full configuration example", "md__builds_pdidev_pdi_plugins_decl_hdf5_README.html#autotoc_md91", null ]
    ] ],
    [ "The FlowVR plugin", "md__builds_pdidev_pdi_plugins_flowvr_README.html", [
      [ "Configuration elements", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_configuration", [
        [ "FlowVR plugin tree", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_tree", [
          [ "component", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_component_node", null ],
          [ "wait_on_data", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_wait_on_data_node", null ],
          [ "wait_on", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_wait_on_node", null ],
          [ "status", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_status_node", null ],
          [ "abort_on", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_abort_on_node", null ],
          [ "init_on", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_init_on_node", null ],
          [ "parallel", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_parallel_node", null ],
          [ "Several modules", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_several_modules", null ]
        ] ],
        [ "Ports", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_ports", [
          [ "input_ports", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_input_ports", null ],
          [ "output_ports", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_output_ports", null ]
        ] ],
        [ "Message", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_message", [
          [ "Data payload", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_data_payload", null ]
        ] ],
        [ "Chunk payload", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_chunks_payload", null ],
        [ "Event button payload", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_button_payload", null ],
        [ "Event mouse payload", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_mouse_payload", null ],
        [ "Stamp", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_stamp", null ]
      ] ],
      [ "Reading and writing data examples", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_c_api", [
        [ "Read data from FlowVR message by access the shared memory", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_read_shared", null ],
        [ "Write data from FlowVR message by access the shared memory", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_write_shared", null ],
        [ "Read data from FlowVR message by copy from the shared memory", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_read_copy", null ],
        [ "Write data to FlowVR message by copy to the shared memory", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_write_copy", null ],
        [ "Write data to FlowVR message by copy the subset of data to the shared memory", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_wrtie_sparse", null ]
      ] ],
      [ "Reading and writing stamps examples", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_reading_writing_stamps", [
        [ "Read stamp from FlowVR message", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_read_stamp", null ],
        [ "Write stamp from FlowVR message", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_write_stamp", null ]
      ] ],
      [ "Reading and writing mouse and button event examples", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_mouse_button_event", [
        [ "Write mouse event from FlowVR message", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_write_mouse", null ],
        [ "Read mouse event from FlowVR message", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_read_mouse", null ],
        [ "Write button event from FlowVR message", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_write_button", null ],
        [ "Read button event from FlowVR message", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_read_button", null ]
      ] ],
      [ "FlowVR examples reworked for %PDI", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_flowvr_examples", [
        [ "Running the application", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_run_app", null ],
        [ "Tictac example", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_tictac", [
          [ "Bundle example", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_bundle", null ]
        ] ],
        [ "Primes example", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_primes", null ],
        [ "Fluid example", "md__builds_pdidev_pdi_plugins_flowvr_README.html#flowvr_fluid", null ]
      ] ]
    ] ],
    [ "FTI plugin", "md__builds_pdidev_pdi_plugins_fti_README.html", [
      [ "Features and requirements", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md94", [
        [ "Dependencies", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md95", null ],
        [ "Initialization", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md96", null ],
        [ "Predefined descriptors", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md97", null ]
      ] ],
      [ "Configuration grammar", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md98", [
        [ "logging", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md99", null ],
        [ "checkpoint", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md100", null ],
        [ "communicator", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md101", null ],
        [ "config_file", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md102", null ],
        [ "dataset", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md103", null ],
        [ "init_on", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md104", null ],
        [ "recover_on", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md105", null ],
        [ "recover_var", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md106", null ],
        [ "send_file", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md107", null ],
        [ "snapshot_on", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md108", null ],
        [ "status", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md109", null ]
      ] ],
      [ "full configuration example", "md__builds_pdidev_pdi_plugins_fti_README.html#autotoc_md110", null ]
    ] ],
    [ "The Decl'NetCDF plugin", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html", [
      [ "Configuration elements", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_configuration", [
        [ "file subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_file", null ],
        [ "communicator subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_comm", null ],
        [ "on_event subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_on_event", null ],
        [ "when subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_when", null ],
        [ "groups subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_groups", [
          [ "group name subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_groups_name", null ]
        ] ],
        [ "variables subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_variables", [
          [ "variable definition subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_variables_value", null ],
          [ "attribute subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_attr", null ]
        ] ],
        [ "write subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_write", [
          [ "subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_var_selection", null ],
          [ "read/write when subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_io_when", null ]
        ] ],
        [ "read subtree", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_read", null ],
        [ "Full yaml example", "md__builds_pdidev_pdi_plugins_decl_netcdf_README.html#decl_netcdf_full_config", null ]
      ] ]
    ] ],
    [ "The MPI plugin", "md__builds_pdidev_pdi_plugins_mpi_README.html", [
      [ "transtype map", "md__builds_pdidev_pdi_plugins_mpi_README.html#transtype_map_node", null ]
    ] ],
    [ "Trace plugin", "md__builds_pdidev_pdi_plugins_trace_README.html", null ],
    [ "The user-code plugin", "md__builds_pdidev_pdi_plugins_user_code_README.html", [
      [ "Important notes", "md__builds_pdidev_pdi_plugins_user_code_README.html#important_notes_node", null ],
      [ "Dependencies between the code and the specification tree", "md__builds_pdidev_pdi_plugins_user_code_README.html#dependencies_node", null ],
      [ "Use examples", "md__builds_pdidev_pdi_plugins_user_code_README.html#use_examples_node", [
        [ "Hello world!", "md__builds_pdidev_pdi_plugins_user_code_README.html#hello_world_node", null ],
        [ "Handling input", "md__builds_pdidev_pdi_plugins_user_code_README.html#handling_input_node", null ],
        [ "Handling output", "md__builds_pdidev_pdi_plugins_user_code_README.html#handling_output_node", null ],
        [ "Multiple input/output data", "md__builds_pdidev_pdi_plugins_user_code_README.html#multiple_inout_data_node", null ]
      ] ],
      [ "Configuration grammar", "md__builds_pdidev_pdi_plugins_user_code_README.html#conf_grammar_node", [
        [ "on_data", "md__builds_pdidev_pdi_plugins_user_code_README.html#on_data_node", null ],
        [ "on_event", "md__builds_pdidev_pdi_plugins_user_code_README.html#on_event_node", null ],
        [ "function_list", "md__builds_pdidev_pdi_plugins_user_code_README.html#function_list_node", null ],
        [ "function_param_list", "md__builds_pdidev_pdi_plugins_user_code_README.html#function_param_list_node", null ]
      ] ],
      [ "Specification tree example", "md__builds_pdidev_pdi_plugins_user_code_README.html#full_spec_tree_example_node", null ]
    ] ],
    [ "Pycall plugin", "md__builds_pdidev_pdi_plugins_pycall_README.html", [
      [ "Configuration", "md__builds_pdidev_pdi_plugins_pycall_README.html#pycall_configuration", [
        [ "Plugin tree", "md__builds_pdidev_pdi_plugins_pycall_README.html#pycall_plugin_tree", null ],
        [ "on_event", "md__builds_pdidev_pdi_plugins_pycall_README.html#pycall_on_event", null ],
        [ "on_data", "md__builds_pdidev_pdi_plugins_pycall_README.html#pycall_on_data", null ]
      ] ],
      [ "Examples", "md__builds_pdidev_pdi_plugins_pycall_README.html#pycall_ex", null ]
    ] ],
    [ "Serialize plugin", "md__builds_pdidev_pdi_plugins_serialize_README.html", [
      [ "Configuration grammar", "md__builds_pdidev_pdi_plugins_serialize_README.html#serialize_configuration", [
        [ "Plugin examples", "md__builds_pdidev_pdi_plugins_serialize_README.html#serialize_plugin_examples", null ]
      ] ]
    ] ],
    [ "Set_value plugin", "md__builds_pdidev_pdi_plugins_set_value_README.html", [
      [ "Configuration grammar", "md__builds_pdidev_pdi_plugins_set_value_README.html#set_value_configuration", [
        [ "on_init", "md__builds_pdidev_pdi_plugins_set_value_README.html#on_init_list_node", null ],
        [ "on_event", "md__builds_pdidev_pdi_plugins_set_value_README.html#on_event_map_node", null ],
        [ "on_data", "md__builds_pdidev_pdi_plugins_set_value_README.html#on_data_map_node", null ],
        [ "on_finalize", "md__builds_pdidev_pdi_plugins_set_value_README.html#on_finalize_list_node", null ],
        [ "value operation", "md__builds_pdidev_pdi_plugins_set_value_README.html#value_operation", null ],
        [ "value list", "md__builds_pdidev_pdi_plugins_set_value_README.html#value_list", null ],
        [ "scalar value", "md__builds_pdidev_pdi_plugins_set_value_README.html#scalar_value", null ],
        [ "array value", "md__builds_pdidev_pdi_plugins_set_value_README.html#array_value", null ],
        [ "record value", "md__builds_pdidev_pdi_plugins_set_value_README.html#record_value", null ],
        [ "logger map", "md__builds_pdidev_pdi_plugins_set_value_README.html#logger_map", null ]
      ] ],
      [ "full configuration example", "md__builds_pdidev_pdi_plugins_set_value_README.html#full_config", null ],
      [ "Using old values to set new", "md__builds_pdidev_pdi_plugins_set_value_README.html#old_to_new", [
        [ "Increment value", "md__builds_pdidev_pdi_plugins_set_value_README.html#increment", null ],
        [ "Getting old value", "md__builds_pdidev_pdi_plugins_set_value_README.html#increment_in_array", null ],
        [ "Getting new value", "md__builds_pdidev_pdi_plugins_set_value_README.html#update_array_after_scalar", null ]
      ] ]
    ] ],
    [ "Plugin API reference", "annotated.html", "annotated" ]
  ] ]
];

var NAVTREEINDEX =
[
"Concepts.html",
"classPDI_1_1Data__descriptor.html#a76adf3a628997299a690852078ffe9d3",
"group__annotation.html#ga34e34cede8627c47c07e6ede997e37fe"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
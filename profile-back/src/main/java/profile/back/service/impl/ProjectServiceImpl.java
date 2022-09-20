package profile.back.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.Introduction;
import profile.back.domain.Project;
import profile.back.exception.ResourceNotFoundException;
import profile.back.repository.ProjectRepository;
import profile.back.service.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    ProjectRepository projectRepository;
    
    @Override
    public List<Project> list() {
        return projectRepository.findAll();        
    }

    @Override
    public ResponseEntity<Project> get(long pno) {
        // TODO Auto-generated method stub
        Project project = projectRepository.findById(pno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Project Data by no : ["+pno+"]"));
        return ResponseEntity.ok(project);
    }

    @Override
    public Project insert(Project project) {
        // TODO Auto-generated method stub
        return projectRepository.save(project);
    }

    @Override
    public ResponseEntity<Project> update(long pno, Project oldProject) {
        // TODO Auto-generated method stub
        Project project = projectRepository.findById(pno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Project Data by no : ["+pno+"]"));
        
        project.setPno(oldProject.getPno());
        project.setTitle(oldProject.getTitle());
        project.setImg(oldProject.getImg());
        project.setStartDate(oldProject.getStartDate());
        project.setEndDate(oldProject.getEndDate());
        project.setLink(oldProject.getLink());
        project.setStartRunning(oldProject.getStartRunning());
        project.setSkills(oldProject.getSkills());
        project.setPeople(oldProject.getPeople());
        project.setDetail(oldProject.getDetail());
        project.setIsOperation(oldProject.getIsOperation());
        
        Project newProject = projectRepository.save(project);
        return ResponseEntity.ok(newProject);
    }
    
    @Override
    public ResponseEntity<Map<String, Boolean>> delete(long pno) {
        // TODO Auto-generated method stub
        Project project = projectRepository.findById(pno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Project Data by no : ["+pno+"]"));
        
        projectRepository.delete(project);
        Map<String, Boolean> response = new HashMap<>();
        
        response.put("Deleted Project Data by id : ["+pno+"]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}